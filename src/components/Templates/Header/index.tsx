import { FC, useContext, useState } from "react";
import { GeneralContext } from "../../../contexts";
import { useLocation, Link } from "react-router-dom";
import { LogButtons, MobileDrawer } from "../../Organisms";
import flexyLogo from "../../../assets/flexy-logo.svg";
import { Container, StyledImage, MenuIcon } from "./styledComponents";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../../../config/constants";
import menuIcon from "../../../assets/menu-icon.svg";

const Header: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { viewportWidth } = useContext(GeneralContext);
  const registerPath = `/${REGISTER_ROUTE}`;
  const loginPath = `/${LOGIN_ROUTE}`;
  const { pathname } = useLocation();
  const showLogButtons = ![registerPath, loginPath].includes(pathname);
  const isSmall = viewportWidth < 769;

  const openDrawer = () => setIsDrawerOpen(true);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <Container showLogButtons={showLogButtons}>
      <Link to={"/"}>
        <StyledImage src={flexyLogo} alt="Flexy logo" />
      </Link>
      {showLogButtons && !isSmall && <LogButtons />}
      {isSmall && (
        <>
          <MenuIcon
            src={menuIcon}
            alt="Menu Icon"
            width={24}
            height={24}
            onClick={openDrawer}
          />
          <MobileDrawer
            open={isDrawerOpen}
            onClose={closeDrawer}
            onOpen={openDrawer}
          />
        </>
      )}
    </Container>
  );
};

export default Header;
