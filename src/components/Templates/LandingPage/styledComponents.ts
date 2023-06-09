import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  paddingTop: theme.custom.header.height,
  display: "flex",
  flexDirection: "column",
  gap: theme.custom.header.height,
  alignItems: "center",
  justifyContent: "flex-start",
  "@media (max-width: 768px)": {
    paddingTop: theme.custom.header.smallHeight,
  },
}));
