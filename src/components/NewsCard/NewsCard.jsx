import "./NewsCard.css";
import bookmarkIcon from "../../assets/bookmark.svg";
import bookmarkActiveIcon from "../../assets/bookmark-active.svg";
import trashIcon from "../../assets/trash.svg";

function NewsCard({
  card,
  isLoggedIn = false,
  isSaved = false,
  isSavedPage = false,
  onToggleSave,
  onDeleteSaved,
}) {
  if (!card) return null;

  function handleButtonClick() {
    if (isSavedPage) {
      onDeleteSaved?.(card);
      return;
    }

    onToggleSave?.(card);
  }

  return (
  <li className="news-card">
    <article className="news-card__article">
      <a
        className="news-card__link"
        href={card.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={card.title}
      >
        <div className="news-card__image-wrapper">
          {isSavedPage && card.keyword && (
            <div className="news-card__keyword">{card.keyword}</div>
          )}

          <img
            src={card.image}
            alt={card.title}
            className="news-card__image"
          />
        </div>

        <div className="news-card__content">
          <p className="news-card__date">{card.date}</p>
          <h3 className="news-card__title">{card.title}</h3>
          <p className="news-card__text">{card.text}</p>
          <p className="news-card__source">{card.source}</p>
        </div>
      </a>

      <div className="news-card__action">
        {!isLoggedIn && !isSavedPage && (
          <span className="news-card__tooltip">Sign in to save articles</span>
        )}

        {isSavedPage ? (
          <>
            <span className="news-card__tooltip">Remove from saved</span>
            <button
              type="button"
              className="news-card__save-button"
              aria-label="Remove article"
              onClick={handleButtonClick}
            >
              <img
                src={trashIcon}
                alt=""
                className="news-card__save-icon"
              />
            </button>
          </>
        ) : (
          <button
            type="button"
            className="news-card__save-button"
            aria-label={isSaved ? "Remove from saved" : "Save article"}
            onClick={handleButtonClick}
          >
            <img
              src={isSaved ? bookmarkActiveIcon : bookmarkIcon}
              alt=""
              className="news-card__save-icon"
            />
          </button>
        )}
      </div>
    </article>
  </li>
);
}

export default NewsCard;