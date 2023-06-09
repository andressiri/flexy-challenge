import { FC } from "react";
import { StyledTitle } from "./styledComponents";

interface Props {
  text: string;
}

const Title: FC<Props> = ({ text }) => {
  return <StyledTitle variant="h1">{text}</StyledTitle>;
};

export default Title;
