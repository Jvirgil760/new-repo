import "./NewsCard.css";

function NewsCard() {
  return (
    <article className="news-card">
      <p className="news-card__date">November 4, 2026</p>
      <h3 className="news-card__title">Sample news article title</h3>
      <p className="news-card__text">
        This is placeholder text for a news card component.
      </p>
      <p className="news-card__source">News Source</p>
    </article>
  );
}

export default NewsCard;