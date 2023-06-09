import { FC } from "react";
import { Container } from "./styledComponents";
import { StyledButton, Title } from "../../Atoms";
import { Link } from "react-router-dom";

const ForgotPassword: FC = () => {
  return (
    <Container component="section">
      <Title text="Lo sentimos, no es posible cambiar la contraseña aún" />
      <Title text="Puedes comunicarte a fake@flexy.com.ar y te ayudaremos a resolver tu problema" />
      <Link to={"/"}>
        <StyledButton tabIndex={-1}>Go to main page</StyledButton>
      </Link>
    </Container>
  );
};

export default ForgotPassword;
