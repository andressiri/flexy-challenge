import { Routes, Route, Navigate } from "react-router-dom";
import {
  DashboardPage,
  LandingPage,
  LoginPage,
  NotFound,
  ProtectRoute,
  RedirectIfLogged,
  RegisterPage,
} from "./components/Templates";
import { Container } from "./styles/styledComponents";
import {
  DASHBOARD_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
  REGISTER_ROUTE,
} from "./config/constants";

function App() {
  return (
    <Container>
      <Routes>
        <Route path={`/${NOT_FOUND_ROUTE}`} element={<NotFound />} />
        <Route path="*" element={<Navigate to={`/${NOT_FOUND_ROUTE}`} />} />
        <Route element={<RedirectIfLogged />}>
          <Route path="/" element={<LandingPage />} />
          <Route path={`/${LOGIN_ROUTE}`} element={<LoginPage />} />
          <Route path={`/${REGISTER_ROUTE}`} element={<RegisterPage />} />
        </Route>
        <Route element={<ProtectRoute />}>
          <Route path={`/${DASHBOARD_ROUTE}`} element={<DashboardPage />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
