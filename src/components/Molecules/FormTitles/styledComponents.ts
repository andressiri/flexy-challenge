import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.custom.buttons.maxWidth,
  marginBottom: "24px",
  "@media (max-width: 768px)": {
    marginBottom: "31px",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: "8px",
  color: theme.palette.primary.dark,
  textAlign: "left",
  fontSize: "32px",
  fontWeight: 700,
  lineHeight: "40px",
  "@media (max-width: 768px)": {
    textAlign: "center",
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark.replace("1)", "0.5)"),
  textAlign: "left",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
  "@media (max-width: 768px)": {
    textAlign: "center",
  },
}));
