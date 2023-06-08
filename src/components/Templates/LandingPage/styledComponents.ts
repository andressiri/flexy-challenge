import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  marginTop: theme.custom.header.height,
  paddingTop: theme.custom.header.height,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "60px",
  fontWeight: 800,
}));
