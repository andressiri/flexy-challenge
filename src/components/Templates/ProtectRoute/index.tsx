import { useContext } from "react";
import { UsersContext } from "../../../contexts";
import { Navigate, Outlet } from "react-router-dom";
import { IAuthUser } from "../../../typings/users";

function ProtectRoute() {
  const { authUser } = useContext(UsersContext);

  if (!(authUser as IAuthUser).id) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
}

export default ProtectRoute;
