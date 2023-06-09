import { FC } from "react";
import { Container } from "./styledComponents";
import { StyledButton, Title } from "../../Atoms";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <Container component="section">
      <Title text="Error 404" />
      <Title text="Page not found" />
      <Link to={"/"}>
        <StyledButton tabIndex={-1}>Go to main page</StyledButton>
      </Link>
    </Container>
  );
};

export default NotFound;
