import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  function handleChange(evt) {
    setQuery(evt.target.value);
    if (error) {
      setError("");
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setError("Please enter a keyword");
      return;
    }

    setError("");
    onSearch(trimmedQuery);
  }

  return (
    <section className="search-form">
      <div className="search-form__content">
        <h1 className="search-form__title">What's going on in the world?</h1>
        <p className="search-form__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <form className="search-form__form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            className="search-form__input"
            placeholder="Enter topic"
            value={query}
            onChange={handleChange}
          />
          <button type="submit" className="search-form__button">
            Search
          </button>
        </form>

        {error && <p className="search-form__error">{error}</p>}
      </div>
    </section>
  );
}

export default SearchForm;