import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  paddingTop: theme.custom.header.height,
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "60px",
  fontWeight: 800,
}));
