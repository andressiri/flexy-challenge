import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const ChildrenText = styled(Typography)(({ theme }) => ({
  margin: "-13px auto 25px auto",
  color: theme.custom.colors.greyscale500,
  textAlign: "center",
  fontSize: "14px",
  fontWeright: 400,
  lineHeight: "19.6px",
  "@media (max-width: 768px)": {
    color: theme.palette.primary.main,
    margin: "-10px auto 27px auto",
    fontWeight: 500,
  },
}));
