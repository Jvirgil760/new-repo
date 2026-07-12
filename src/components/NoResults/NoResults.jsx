import "./NoResults.css";
import notFoundIcon from "../../assets/not-found_v1.svg";

function NoResults() {
  return (
    <section className="no-results">
      <div className="no-results__content">
        <img
          src={notFoundIcon}
          alt="Nothing found"
          className="no-results__icon"
        />
        <h2 className="no-results__title">Nothing found</h2>
        <p className="no-results__text">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </section>
  );
}

export default NoResults;