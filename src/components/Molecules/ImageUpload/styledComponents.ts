import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.custom.buttons.maxWidth,
  marginBottom: "24px",
  display: "flex",
  gap: "9px",
  alignItems: "center",
  justifyContent: "flex-start",
}));

export const StyledFileInput = styled("input")(() => ({
  display: "none",
}));

export const StyledImage = styled("img")(() => ({
  width: "47px",
  height: "47px",
  borderRadius: "50%",
  objectFit: "cover",
  cursor: "pointer",
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "22.4px",
  cursor: "pointer",
}));
