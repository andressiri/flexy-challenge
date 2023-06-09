import { useCallback, useContext } from "react";
import { v4 } from "uuid";
import { REGISTER_ROUTE } from "../../../config/constants";
import { RequestHelpersProps } from "../../../typings/services";
import { UsersContext } from "../../../contexts";
import { ILoginFormData, IRegisterFormData } from "../../../typings/users";

const useMockRequest = () => {
  const { registeredUsers, setRegisteredUsers } = useContext(UsersContext);

  const mockRequest = useCallback(
    (props: RequestHelpersProps) => {
      try {
        // register mockup
        if (props.route === `/${REGISTER_ROUTE}`) {
          if (
            registeredUsers?.some(
              (user) => (props.data as IRegisterFormData)?.email === user.email
            )
          )
            throw new Error("Ya existe un usuario con ese correo");

          const data = {
            ...props.data,
            id: v4(),
            createdAt: new Date(),
            updatedAt: new Date(),
          };

          setRegisteredUsers((prev) => [...prev, data]);

          return {
            message: "Usuario registrado exitosamente",
            data,
          };
        }

        //login mockup
        const userExists = registeredUsers.filter(
          (user) => (props.data as ILoginFormData)?.email === user.email
        );

        if (!(userExists.length > 0))
          throw new Error("No existe un usuario con ese email");

        if (userExists[0].password !== (props.data as ILoginFormData)?.password)
          throw new Error("Contraseña incorrecta");

        return {
          message: "Ha ingresado exitosamente",
          data: userExists[0],
        };
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(`${err}`);
        } else {
          console.log("Error inesperado", err); // eslint-disable-line no-console
          throw new Error("Error inesperado");
        }
      }
    },
    [registeredUsers, setRegisteredUsers]
  );

  return mockRequest;
};

export default useMockRequest;
