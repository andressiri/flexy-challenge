import { FC, useContext, useMemo } from "react";
import { GeneralContext } from "../../../contexts";
import { useGetRegisterComponentsProps } from "../../../utils/hooks";
import { FormWithPicturePage } from "../../Organisms";
import { ChildrenText } from "./styledComponents";
import { LOGIN_ROUTE } from "../../../config/constants";

const RegisterPage: FC = () => {
  const { viewportWidth } = useContext(GeneralContext);
  const { title, subtitle, imageProps, formProps } =
    useGetRegisterComponentsProps();
  const bottomText = "¿Ya tenés una cuenta?";
  const bottomLink = `/${LOGIN_ROUTE}`;
  const bottomLinkText = "Iniciá sesión";
  const childrenText = useMemo(() => {
    return viewportWidth > 768
      ? "Debe tener al menos 8 caracteres."
      : "¿Olvidaste tu contraseña?";
  }, [viewportWidth]);

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
      <ChildrenText>{childrenText}</ChildrenText>
    </FormWithPicturePage>
  );
};

export default RegisterPage;
