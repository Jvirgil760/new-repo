import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <p className="navigation__logo">News Explorer</p>
      <ul className="navigation__links">
        <li>Home</li>
        <li>Saved Articles</li>
        <li>Sign In</li>
      </ul>
    </nav>
  );
}

export default Navigation;