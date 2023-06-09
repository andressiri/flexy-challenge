import { FC } from "react";
import { Container } from "../LandingPage/styledComponents";
import { Title } from "../../Atoms";
import { YoutubeVideo } from "../../Molecules";

const DashboardPage: FC = () => {
  const titleText = "¡Empezá a disfrutar de flexy!";

  return (
    <Container component="main">
      <Title text={titleText} />
      <YoutubeVideo
        width="896"
        height="504"
        src="https://www.youtube.com/embed/EAIvULgyM-M"
      />
    </Container>
  );
};

export default DashboardPage;
