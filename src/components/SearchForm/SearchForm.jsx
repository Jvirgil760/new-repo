import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <h1 className="search-form__title">What's going on in the world?</h1>
      <p className="search-form__subtitle">
        Find the latest news on any topic and save them in your personal account.
      </p>

      <form className="search-form__form">
        <input
          type="text"
          className="search-form__input"
          placeholder="Enter topic"
        />
        <button type="submit" className="search-form__button">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;