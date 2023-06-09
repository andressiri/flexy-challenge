import { FC } from "react";
import { Container, Title, Subtitle } from "./styledComponents";

interface Props {
  title: string;
  subtitle: string;
}

const FormTitles: FC<Props> = ({ title, subtitle }) => {
  return (
    <Container>
      <Title variant="h1">{title}</Title>
      <Subtitle variant="h2">{subtitle}</Subtitle>
    </Container>
  );
};

export default FormTitles;
