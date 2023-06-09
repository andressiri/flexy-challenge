import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box, {
  shouldForwardProp: (prop) => !["shouwLogButtons"].includes(prop as string),
})<{ showLogButtons?: boolean }>(({ theme, showLogButtons }) => ({
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100vw",
  height: theme.custom.header.height,
  padding: "28px 11px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: `1.5px solid ${theme.custom.colors.shadesOfPurple92}`,
  "@media (min-width: 768px)": {
    justifyContent: showLogButtons ? "space-between" : "flex-start",
  },
}));

export const StyledImage = styled("img")(() => ({
  width: "134px",
  height: "40px",
  padding: "8px 15px 2px 15px",
}));
