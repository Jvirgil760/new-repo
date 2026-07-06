import { useState } from "react";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.png";
import { Link, NavLink } from "react-router-dom";

function Navigation({
  isLoggedIn = false,
  isLight = false,
  userName = "Elise",
  onLoginClick,
  onLogoutClick,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  function handleCloseMenu() {
    setIsMobileMenuOpen(false);
  }

  function handleLoginButtonClick() {
    handleCloseMenu();
    onLoginClick?.();
  }

  function handleLogoutButtonClick() {
    handleCloseMenu();
    onLogoutClick?.();
  }

  return (
    <nav
      className={`navigation ${
        isLight ? "navigation_theme_light" : "navigation_theme_dark"
      }`}
    >
      <div className="navigation__content">
        <Link
          to="/"
          className={`navigation__logo ${
            isLight ? "navigation__logo_theme_light" : ""
          }`}
          onClick={handleCloseMenu}
        >
          NewsExplorer
        </Link>

        <button
          type="button"
          className={`navigation__menu-button ${
            isLight ? "navigation__menu-button_theme_light" : ""
          } ${isMobileMenuOpen ? "navigation__menu-button_opened" : ""}`}
          onClick={handleToggleMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="navigation__menu-line" />
          <span className="navigation__menu-line" />
          <span className="navigation__menu-line" />
        </button>

        <div
          className={`navigation__menu ${
            isMobileMenuOpen ? "navigation__menu_opened" : ""
          }`}
        >
          <NavLink
            to="/"
            end
            onClick={handleCloseMenu}
            className={({ isActive }) =>
              `navigation__link ${
                isLight ? "navigation__link_theme_light" : ""
              } ${isActive ? "navigation__link_active" : ""}`
            }
          >
            Home
          </NavLink>

          {isLoggedIn ? (
            <>
              <NavLink
                to="/saved-news"
                onClick={handleCloseMenu}
                className={({ isActive }) =>
                  `navigation__link ${
                    isLight ? "navigation__link_theme_light" : ""
                  } ${isActive ? "navigation__link_active" : ""}`
                }
              >
                Saved articles
              </NavLink>

              <button
                type="button"
                className={`navigation__button navigation__button_logged-in ${
                  isLight ? "navigation__button_theme_light" : ""
                }`}
                onClick={handleLogoutButtonClick}
              >
                <span>{userName}</span>
                <img
                  src={logoutIcon}
                  alt="Log out"
                  className="navigation__logout-icon"
                />
              </button>
            </>
          ) : (
            <button
              type="button"
              className={`navigation__button ${
                isLight ? "navigation__button_theme_light" : ""
              }`}
              onClick={handleLoginButtonClick}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;