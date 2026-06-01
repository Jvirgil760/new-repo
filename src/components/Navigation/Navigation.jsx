import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__logo">
        News Explorer
      </Link>

      <ul className="navigation__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/saved-news">Saved Articles</Link>
        </li>
        <li>
          <button type="button">Sign In</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;