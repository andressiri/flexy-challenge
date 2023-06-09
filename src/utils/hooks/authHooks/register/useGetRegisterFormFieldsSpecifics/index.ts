import { useContext } from "react";
import { GeneralContext } from "../../../../../contexts";
import { validateEmail } from "../../../../helpers";
import {
  IRegisterFormData,
  IRegisterFormVisited,
} from "../../../../../typings/users";
import { IFormFieldSpecifics } from "../../../../../typings/forms";

const useGetRegisterFormFieldsSpecifics = (
  formData: IRegisterFormData,
  formVisited: IRegisterFormVisited
) => {
  const { viewportWidth } = useContext(GeneralContext);
  const isSmall = viewportWidth < 769;

  const emailError =
    formVisited.email && (!formData.email || !validateEmail(formData.email));

  const passwordError =
    formVisited.password &&
    (!formData.password || formData.password?.length < 8);

  const formFieldsSpecificsArray: IFormFieldSpecifics[] = [
    {
      field: "fullName",
      placeholder: "Nombre y Apellido",
      required: true,
      helperText:
        formData.fullName || !formVisited.fullName
          ? ""
          : "Es necesario un nombre",
    },
    {
      field: "phone",
      placeholder: isSmall ? "+54 9 221 000 0000" : "+54 01 0200 000",
      required: true,
      type: "tel",
      helperText:
        formData.phone || !formVisited.phone ? "" : "Es necesario un teléfono",
    },
    {
      field: "email",
      placeholder: "hola@tuemail.com",
      required: true,
      type: "email",
      error: emailError,
      helperText: !emailError
        ? ""
        : !formData.email
        ? "Es necesario un email"
        : "Por favor ingresa un email válido",
    },
    {
      field: "password",
      placeholder: "Ingresá tu contraseña",
      required: true,
      type: "password",
      error: passwordError,
      helperText: !passwordError
        ? ""
        : !formData.password
        ? "Es necesaria una contraseña"
        : "La contraseña debe tener al menos 8 caracteres",
    },
  ];

  return formFieldsSpecificsArray;
};

export default useGetRegisterFormFieldsSpecifics;
