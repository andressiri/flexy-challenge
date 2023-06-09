import { FC, useContext, useMemo } from "react";
import { GeneralContext } from "../../../contexts";
import { useNavigate } from "react-router-dom";
import { useGetRegisterComponentsProps } from "../../../utils/hooks";
import { FormWithPicturePage } from "../../Organisms";
import { ChildrenText } from "./styledComponents";
import { FORGOT_PASSWORD_ROUTE, LOGIN_ROUTE } from "../../../config/constants";

const RegisterPage: FC = () => {
  const { viewportWidth } = useContext(GeneralContext);
  const { title, subtitle, imageProps, formProps } =
    useGetRegisterComponentsProps();
  const bottomText = "¿Ya tenés una cuenta?";
  const bottomLink = `/${LOGIN_ROUTE}`;
  const bottomLinkText = "Iniciá sesión";
  const navigate = useNavigate();

  const childrenText = useMemo(() => {
    return viewportWidth > 768
      ? "Debe tener al menos 8 caracteres."
      : "¿Olvidaste tu contraseña?";
  }, [viewportWidth]);

  const handleForgotPassword = () => {
    if (viewportWidth < 768) navigate(`/${FORGOT_PASSWORD_ROUTE}`);
  };

  return (
    <FormWithPicturePage
      title={title}
      subtitle={subtitle}
      imageProps={imageProps}
      formProps={formProps}
      bottomText={bottomText}
      bottomLink={bottomLink}
      bottomLinkText={bottomLinkText}
    >
      <ChildrenText onClick={handleForgotPassword}>{childrenText}</ChildrenText>
    </FormWithPicturePage>
  );
};

export default RegisterPage;
