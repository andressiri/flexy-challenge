import { FC, useContext } from "react";
import { UsersContext } from "../../../contexts";
import { Link } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { StyledButton } from "../../Atoms";
import { StyledList } from "./styledComponents";
import { IAuthUser } from "../../../typings/users";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../../../config/constants";

interface Props {
  isDrawer?: boolean;
}

const LogButtons: FC<Props> = ({ isDrawer }) => {
  const { authUser, setAuthUser } = useContext(UsersContext);
  const registerPath = `/${REGISTER_ROUTE}`;
  const loginPath = `/${LOGIN_ROUTE}`;

  const handleLogout = () => setAuthUser({});

  return (
    <StyledList component="ul" isDrawer={isDrawer}>
      {!(authUser as IAuthUser).id ? (
        <>
          <li>
            <Link to={registerPath}>
              <StyledButton
                endIcon={<HowToRegIcon />}
                BGType="primaryOutlined"
                transparent={true}
                sx={{ width: "160px" }}
                tabIndex={-1}
              >
                Registrarse
              </StyledButton>
            </Link>
          </li>

          <li>
            <Link to={loginPath}>
              <StyledButton
                endIcon={<LoginIcon />}
                sx={{ width: "160px" }}
                tabIndex={-1}
              >
                Ingresar
              </StyledButton>
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link to={loginPath} onClick={handleLogout}>
            <StyledButton
              endIcon={<LogoutIcon />}
              BGType="primaryOutlined"
              transparent={true}
              sx={{ width: "160px" }}
              tabIndex={-1}
            >
              Salir
            </StyledButton>
          </Link>
        </li>
      )}
    </StyledList>
  );
};

export default LogButtons;
