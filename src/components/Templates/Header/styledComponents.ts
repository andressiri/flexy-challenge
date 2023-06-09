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
  justifyContent: showLogButtons ? "space-between" : "flex-start",
  borderBottom: `1.5px solid ${theme.custom.colors.shadesOfPurple92}`,
  "@media (max-width: 768px)": {
    height: theme.custom.header.smallHeight,
    padding: "16px 24px",
    justifyContent: "space-between",
  },
}));

export const StyledImage = styled("img")(() => ({
  width: "134px",
  height: "40px",
  padding: "8px 15px 2px 15px",
}));

export const MenuIcon = styled("img")(() => ({
  width: "24px",
  height: "24px",
}));
