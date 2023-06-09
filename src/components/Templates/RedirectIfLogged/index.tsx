import { useContext } from "react";
import { UsersContext } from "../../../contexts";
import { Navigate, Outlet } from "react-router-dom";
import { IAuthUser } from "../../../typings/users";
import { DASHBOARD_ROUTE } from "../../../config/constants";

function RedirectIfLogged() {
  const { authUser } = useContext(UsersContext);

  if ((authUser as IAuthUser).id) {
    return <Navigate to={`/${DASHBOARD_ROUTE}`} replace />;
  }

  return <Outlet />;
}

export default RedirectIfLogged;
