import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({
  isLoggedIn = false,
  isLight = false,
  userName = "Johnathan",
  onLoginClick,
  onSearch,
}) {
  return (
    <header className={`header ${isLight ? "header_theme_light" : "header_theme_dark"}`}>
      <Navigation
        isLoggedIn={isLoggedIn}
        isLight={isLight}
        userName={userName}
        onLoginClick={onLoginClick}
      />
      {!isLight && <SearchForm onSearch={onSearch} />}
    </header>
  );
}

export default Header;