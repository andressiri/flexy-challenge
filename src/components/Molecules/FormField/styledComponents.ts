import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: theme.custom.buttons.maxWidth,
}));

export const EyeIconContainer = styled(Box, {
  shouldForwardProp: (prop) => !["dynamicType"].includes(prop as string),
})<{ dynamicType: "password" | "text" }>(({ theme, dynamicType }) => ({
  position: "absolute",
  top: "12px",
  right: "16px",
  width: "24px",
  height: "24px",
  "&::after": {
    content: "''",
    position: "absolute",
    top: "11px",
    left: "-1px",
    width: "28px",
    height: "3px",
    background: theme.custom.colors.greyscale500,
    borderRadius: "2px",
    transform: "rotate(-45deg)",
    display: dynamicType === "password" ? "none" : "block",
  },
}));
