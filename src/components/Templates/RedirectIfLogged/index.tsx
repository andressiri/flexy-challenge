import { useContext } from "react";
import { UsersContext } from "src/contexts";
import { Navigate, Outlet } from "react-router-dom";

function RedirectIfLogged() {
  const { authUser } = useContext(UsersContext);

  if (authUser) {
    return <Navigate to={"/dashboard"} replace />;
  }

  return <Outlet />;
}

export default RedirectIfLogged;
