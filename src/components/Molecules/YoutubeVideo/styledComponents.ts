import { styled } from "@mui/material/styles";

export const StyledIframe = styled("iframe")(({ theme }) => ({
  maxWidth: "100%",
  margin: "0px 30px",
  borderRadius: theme.custom.radius.medium,
}));
