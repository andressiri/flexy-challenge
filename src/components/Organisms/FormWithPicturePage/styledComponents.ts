import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const formSidesPadding = 30;

export const Container = styled(Box)(() => ({
  width: "100%",
  display: "flex",
}));

export const FormContainer = styled(Box)(() => ({
  width: "100%",
  minWidth: `500px`,
  maxWidth: "693px",
  paddingTop: "83px",
  "@media (max-width: 768px)": {
    minWidth: "unset",
    maxWidth: "100%",
    paddingTop: "62px",
  },
}));

export const FormInnerContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: `calc(${theme.custom.buttons.maxWidth} + ${
    formSidesPadding * 2
  }px)`,
  margin: "0px auto 50px 93px",
  padding: `0px ${formSidesPadding}px`,
  "@media (max-width: 1548px)": {
    margin: "0px auto 50px auto",
  },
}));

export const BottomText = styled(Typography)(({ theme }) => ({
  margin: "32px auto auto auto",
  color: theme.custom.colors.greyscale500,
  textAlign: "center",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "19.6px",
  "& span": {
    color: theme.palette.primary.dark,
    fontWeight: 700,
  },
  "@media (max-width: 768px)": {
    margin: "20px auto auto auto",
  },
}));

export const StyledImage = styled("img")(({ theme }) => ({
  zIndex: 5,
  width: "100%",
  marginTop: `-${theme.custom.header.height}`,
  objectFit: "cover",
  "@media (max-width: 1450px)": {
    objectPosition: "calc((100vw - 1450px) * 0.6) 0px",
  },
  "@media (max-width: 768px)": {
    display: "none",
  },
}));
