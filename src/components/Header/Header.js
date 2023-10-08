import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useAdaptiveRender } from "../../hooks/useAdaptiveRender";
import LogoIcon from "../../images/circle-logo.svg";
import MenuBurger from "../MenuBurger/MenuBurger";
import Navigation from "../Navigation/Navigation";
import ProfileButton from "../ProfileButton/ProfileButton";
import Sidebar from "../Sidebar/Sidebar";
import "./Header.css";

const Header = () => {
  // Костыль, подумать над заменой
  const moviesOrProfileRoute = !(
    window.location.href.includes("profile") ||
    window.location.href.includes("movies")
  );

  const { loggedIn } = useContext(AuthContext);
  const { isDesktop, isTablet, isMobile } = useAdaptiveRender();
  const [sidebarIsActive, setSideBarIsActive] = useState(true);

  useEffect(() => {
    setSideBarIsActive(false);
  }, [isDesktop]);

  const handleSetSideBarIsActive = () => {
    setSideBarIsActive(!sidebarIsActive);
  };

  return (
    <header className={`header ${moviesOrProfileRoute && "header_dark"}`}>
      <Link className="header__logo-link" to={"/"}>
        <img src={LogoIcon} alt="Логотип сайта" className="header__logo" />
      </Link>
      {loggedIn ? (
        <>
          {isDesktop ? (
            <>
              <Navigation />
              <div className="header__profile-btn">
                <ProfileButton />
              </div>
            </>
          ) : (
            <>
              <Sidebar
                sidebarIsActive={sidebarIsActive}
                onSetSideBarIsActive={handleSetSideBarIsActive}
              />
              <MenuBurger onSetSideBarIsActive={handleSetSideBarIsActive} />
            </>
          )}
        </>
      ) : (
        <div className="header__auth-links">
          <Link to="/signup" className="header__signup link">
            Регистрация
          </Link>
          <Link to="/signin" className="header__signin link">
            Войти
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
