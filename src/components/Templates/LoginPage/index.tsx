import { FC } from "react";
import { useGetLoginComponentsProps } from "../../../utils/hooks";
import { RememberMe } from "../../Molecules";
import { FormWithPicturePage } from "../../Organisms";
import { REGISTER_ROUTE } from "../../../config/constants";

const LoginPage: FC = () => {
  const { title, subtitle, formProps } = useGetLoginComponentsProps();
  const bottomText = "¿No tenés una cuenta?";
  const bottomLink = `/${REGISTER_ROUTE}`;
  const bottomLinkText = "Registrate";

  return (
    <FormWithPicturePage
      title={title}
      subtitle={subtitle}
      formProps={formProps}
      bottomText={bottomText}
      bottomLink={bottomLink}
      bottomLinkText={bottomLinkText}
    >
      <RememberMe />
    </FormWithPicturePage>
  );
};

export default LoginPage;
