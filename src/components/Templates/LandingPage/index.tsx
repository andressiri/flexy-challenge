import { FC } from "react";
import { Container } from "./styledComponents";
import { Title } from "../../Atoms";
import { YoutubeVideo } from "../../Molecules";

const LandingPage: FC = () => {
  const titleText = "¡Flexy, la app que cambia todo!";

  return (
    <Container component="main">
      <Title text={titleText} />
      <YoutubeVideo
        width="896"
        height="504"
        src="https://www.youtube.com/embed/ijeEvLBciZM"
      />
    </Container>
  );
};

export default LandingPage;
