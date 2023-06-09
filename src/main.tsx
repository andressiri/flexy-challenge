import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  GeneralContextProvider,
  UsersContextProvider,
} from "./contexts/index.ts";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import App from "./App.tsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GeneralContextProvider>
        <UsersContextProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </UsersContextProvider>
      </GeneralContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
