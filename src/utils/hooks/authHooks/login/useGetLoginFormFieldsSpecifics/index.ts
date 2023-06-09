import { validateEmail } from "../../../../helpers";
import {
  ILoginFormData,
  ILoginFormVisited,
} from "../../../../../typings/users";
import { IFormFieldSpecifics } from "../../../../../typings/forms";

const useGetLoginFormFieldsSpecifics = (
  formData: ILoginFormData,
  formVisited: ILoginFormVisited
) => {
  const emailError =
    formVisited.email && (!formData.email || !validateEmail(formData.email));

  const passwordError =
    formVisited.password &&
    (!formData.password || formData.password?.length < 8);

  const formFieldsSpecificsArray: IFormFieldSpecifics[] = [
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

export default useGetLoginFormFieldsSpecifics;
