import { styled } from "@mui/material/styles";

export const StyledIframe = styled("iframe")(({ theme }) => ({
  maxWidth: "calc(100% - 60px)",
  margin: "0px 30px",
  borderRadius: theme.custom.radius.medium,
}));
