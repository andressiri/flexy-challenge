import { useContext } from "react";
import { UsersContext } from "../../../contexts";
import { Navigate, Outlet } from "react-router-dom";
import { DASHBOARD_ROUTE } from "../../../config/constants";

function RedirectIfLogged() {
  const { authUser } = useContext(UsersContext);

  if (authUser) {
    return <Navigate to={`/${DASHBOARD_ROUTE}`} replace />;
  }

  return <Outlet />;
}

export default RedirectIfLogged;
