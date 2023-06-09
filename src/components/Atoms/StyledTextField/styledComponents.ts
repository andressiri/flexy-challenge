import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const lineHeight = 24;

export const TextFieldStyled = styled(TextField, {
  shouldForwardProp: (prop) =>
    !["isError", "rowsNumber", "conditionalHelperText"].includes(
      prop as string
    ),
})<{ isError?: boolean; rowsNumber: number; conditionalHelperText?: boolean }>(
  ({ theme, isError, rowsNumber, conditionalHelperText }) => ({
    width: "100%",
    minHeight: conditionalHelperText
      ? `calc(${theme.custom.buttons.height} + 25px + ${
          rowsNumber - 1
        } * ${lineHeight}px - ${rowsNumber > 1 ? 4 : 0}px)`
      : theme.custom.buttons.height,
    margin: "0px",
    borderRadius: theme.custom.radius.medium,
    "&:hover, &:focus": {
      "& .MuiOutlinedInput-root, & .MuiFormLabel-root": {
        color: `${theme.palette.primary.main}`,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: `2px solid ${theme.palette.primary.main}`,
      },
    },
    "& .MuiOutlinedInput-root": {
      height: theme.custom.buttons.height,
      minHeight: theme.custom.buttons.height,
      padding: "12px 16px",
      background: theme.custom.colors.shadesOfPurple98,
      color: theme.palette.secondary.contrastText,
      fontSize: theme.custom.buttons.fontSizeMd,
      fontWeight: 400,
      lineHeight: `${24}px`,
      borderRadius: theme.custom.radius.medium,
      "&:hover fieldset, &:focus fieldset": {
        border: `2px solid ${theme.palette.primary.main}`,
      },
      input: {
        "&:-webkit-autofill": {
          borderRadius: "0px",
          WebkitBoxShadow: `0 0 0 200px ${theme.custom.colors.shadesOfPurple98} inset !important`,
          WebkitTextFillColor: theme.palette.secondary.contrastText,
        },
        "&::placeholder": {
          color: theme.palette.primary.dark,
          fontSize: "16px",
          fontWeight: 500,
          opacity: "0.65",
        },
      },
    },
    "& .MuiFormLabel-root": {
      color: isError
        ? theme.palette.error.main
        : theme.palette.secondary.contrastText,
      fontSize: theme.custom.buttons.fontSizeMd,
      fontWeight: 400,
    },
    "& .MuiOutlinedInput-input": {
      padding: "0px",
      color: theme.palette.secondary.contrastText,
    },
    "& label.Mui-focused": {
      color: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.custom.colors.shadesOfPurple92}`,
      borderRadius: theme.custom.radius.medium,
    },
    "& .MuiFormHelperText-root": {
      margin: "-67px 0px 0px 2px",
      fontSize: "14px",
    },
  })
);

// theme.palette.primary.dark.replace("1)", "0.5)")
