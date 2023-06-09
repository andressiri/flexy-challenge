import { createTheme, ThemeOptions } from "@mui/material/styles";

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "rgba(112, 101, 240, 1)",
      light: "rgba(224, 222, 247, 1)",
      dark: "rgba(0, 9, 41, 1)",
      contrastText: "rgba(255, 255, 255, 0.87)",
    },
    secondary: {
      main: "rgba(71, 190, 163, 1)",
      light: "rgba(198, 252, 236, 1)",
      dark: "rgba(0, 136, 111, 1)",
      contrastText: "rgba(0, 9, 41, 1)",
    },
  },
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
  },
  custom: {
    buttons: {
      height: "48px",
      disabledBackground: "rgba(130, 130, 130, 1)",
      disabledColor: "rgba(0, 0, 0, 0.26)",
      fontSizeMd: "16px",
    },
    radius: {
      medium: "8px",
    },
    header: {
      height: "96px",
    },
  },
});
