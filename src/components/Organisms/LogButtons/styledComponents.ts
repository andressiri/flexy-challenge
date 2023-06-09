import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledList = styled(Box, {
  shouldForwardProp: (prop) => !["isDrawer"].includes(prop as string),
})<{ isDrawer?: boolean }>(({ theme, isDrawer }) => ({
  height: "100%",
  display: "flex",
  flexDirection: isDrawer ? "column" : "row",
  alignItems: "center",
  gap: "20px",
  paddingTop: isDrawer ? theme.custom.header.height : "unset",
}));
