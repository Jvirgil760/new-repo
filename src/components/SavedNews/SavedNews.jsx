import "./SavedNews.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";

function getKeywordsText(cards) {
  const keywords = [...new Set(cards.map((card) => card.keyword).filter(Boolean))];

  if (keywords.length === 0) return "";
  if (keywords.length === 1) return keywords[0];
  if (keywords.length === 2) return `${keywords[0]} and ${keywords[1]}`;

  return `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} other`;
}

function SavedNews({ cards = [], currentUser, onDeleteSaved }) {
  const userName = currentUser?.username || "Elise";
  const keywordsText = getKeywordsText(cards);

  return (
    <div className="saved-news">
      <div className="saved-news__hero">
        <Header isLoggedIn={true} isLight={true} userName={userName} />

        <section className="saved-news__content">
          <p className="saved-news__subtitle">Saved articles</p>
          <h1 className="saved-news__title">
            {userName}, you have {cards.length} saved articles
          </h1>

          {keywordsText && (
            <p className="saved-news__keywords">
              By keywords:
              <span className="saved-news__keywords-accent">
                {" "}
                {keywordsText}
              </span>
            </p>
          )}
        </section>
      </div>

      <ul className="saved-news__cards">
        {cards.map((card) => (
          <NewsCard
            key={card.id}
            card={card}
            isLoggedIn={true}
            isSaved={true}
            isSavedPage={true}
            onDeleteSaved={onDeleteSaved}
          />
        ))}
      </ul>

      <Footer />
    </div>
  );
}

export default SavedNews;