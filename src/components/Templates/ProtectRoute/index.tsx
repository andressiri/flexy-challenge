import { useContext } from "react";
import { UsersContext } from "../../../contexts";
import { Navigate, Outlet } from "react-router-dom";

function ProtectRoute() {
  const { authUser } = useContext(UsersContext);

  if (!authUser) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
}

export default ProtectRoute;
