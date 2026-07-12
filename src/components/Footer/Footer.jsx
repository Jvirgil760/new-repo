import { Link } from "react-router-dom";
import githubIcon from "../../assets/Github.svg";
import linkedinIcon from "../../assets/LinkedIn.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__top">
          <Link to="/" className="footer__link">
            Home
          </Link>

          <div className="footer__social">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="footer__icon-link"
            >
              <img src={githubIcon} alt="GitHub" className="footer__icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noreferrer"
              className="footer__icon-link"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="footer__icon" />
            </a>
          </div>
        </div>

        <a
          href="https://tripleten.com"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          TripleTen
        </a>

        <p className="footer__copyright">
          © 2026 Supersite, Powered by News API
        </p>
      </div>
    </footer>
  );
}

export default Footer;