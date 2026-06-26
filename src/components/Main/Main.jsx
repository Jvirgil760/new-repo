import "./Main.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";

function Main({
  cards = [],
  isLoading = false,
  hasSearched = false,
  requestError = "",
  cardsToShow = 3,
  onShowMore,
  isLoggedIn = false,
  onToggleSave,
}) {
  if (!hasSearched) {
    return null;
  }

  if (isLoading) {
    return <Preloader />;
  }

  if (requestError) {
    return (
      <section className="main">
        <div className="main__content">
          <p className="main__error">
            Sorry, something went wrong during the request. Please try again
            later.
          </p>
        </div>
      </section>
    );
  }

  if (cards.length === 0) {
    return <NoResults />;
  }

  const visibleCards = cards.slice(0, cardsToShow);
  const hasMoreCards = cards.length > cardsToShow;

  return (
    <section className="main">
      <div className="main__content">
        <h2 className="main__title">Search results</h2>

        <ul className="main__cards">
          {visibleCards.map((card) => (
            <NewsCard
              key={card.id}
              card={card}
              isLoggedIn={isLoggedIn}
              isSaved={card.isSaved}
              isSavedPage={false}
              onToggleSave={onToggleSave}
            />
          ))}
        </ul>

        {hasMoreCards && (
          <button
            type="button"
            className="main__show-more"
            onClick={onShowMore}
          >
            Show more
          </button>
        )}
      </div>
    </section>
  );
}

export default Main;