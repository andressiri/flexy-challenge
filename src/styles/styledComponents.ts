import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  paddingTop: theme.custom.header.height,
}));
