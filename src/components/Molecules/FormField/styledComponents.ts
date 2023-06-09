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
    top: "10.5px",
    left: "-1.5px",
    width: "28px",
    height: "2.5px",
    display: dynamicType === "password" ? "none" : "block",
    background: theme.custom.colors.greyscale500,
    opacity: "0.9",
    borderRadius: "2px",
    transform: "rotate(-45deg)",
  },
}));
