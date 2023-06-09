import { useLocation, Link } from "react-router-dom";
import { LogButtons } from "../../Organisms";
import flexyLogo from "../../../assets/flexy-logo.svg";
import { Container, StyledImage } from "./styledComponents";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../../../config/constants";

const Header = () => {
  const registerPath = `/${REGISTER_ROUTE}`;
  const loginPath = `/${LOGIN_ROUTE}`;
  const { pathname } = useLocation();
  const showLogButtons = ![registerPath, loginPath].includes(pathname);

  return (
    <Container showLogButtons={showLogButtons}>
      <Link to={"/"}>
        <StyledImage src={flexyLogo} alt="Flexy logo" />
      </Link>
      {showLogButtons && <LogButtons />}
    </Container>
  );
};

export default Header;
