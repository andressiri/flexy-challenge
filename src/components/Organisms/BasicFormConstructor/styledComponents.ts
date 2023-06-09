import { styled } from "@mui/material/styles";
import { Box, CircularProgress } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.custom.buttons.maxWidth,
  margin: "0px auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Loader = styled(CircularProgress)(() => ({
  width: "30px !important",
  height: "30px !important",
  color: "currentColor",
}));
