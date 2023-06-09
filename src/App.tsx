import { Routes, Route, Navigate } from "react-router-dom";
import {
  DashboardPage,
  ForgotPassword,
  Header,
  LandingPage,
  LoginPage,
  NotFound,
  ProtectRoute,
  RedirectIfLogged,
  RegisterPage,
  Toaster,
} from "./components/Templates";
import { Container } from "./styles/styledComponents";
import {
  DASHBOARD_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
  REGISTER_ROUTE,
} from "./config/constants";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path={`/${NOT_FOUND_ROUTE}`} element={<NotFound />} />
        <Route path="*" element={<Navigate to={`/${NOT_FOUND_ROUTE}`} />} />
        <Route
          path={`/${FORGOT_PASSWORD_ROUTE}`}
          element={<ForgotPassword />}
        />
        <Route element={<RedirectIfLogged />}>
          <Route path="/" element={<LandingPage />} />
          <Route path={`/${LOGIN_ROUTE}`} element={<LoginPage />} />
          <Route path={`/${REGISTER_ROUTE}`} element={<RegisterPage />} />
        </Route>
        <Route element={<ProtectRoute />}>
          <Route path={`/${DASHBOARD_ROUTE}`} element={<DashboardPage />} />
        </Route>
      </Routes>
      <Toaster />
    </Container>
  );
}

export default App;
