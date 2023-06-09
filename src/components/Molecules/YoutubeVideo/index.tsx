import { FC } from "react";
import { StyledIframe } from "./styledComponents";

interface Props {
  width?: string;
  height?: string;
  src: string;
  title?: string;
}

const YoutubeVideo: FC<Props> = ({
  width = "560",
  height = "315",
  src,
  title = "Flexy, la app que cambia todo",
}) => {
  return (
    <StyledIframe
      width={width}
      height={height}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};

export default YoutubeVideo;
