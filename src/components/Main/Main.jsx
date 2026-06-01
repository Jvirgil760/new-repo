import "./Main.css";
import NewsCard from "../NewsCard/NewsCard";

function Main() {
  return (
    <main className="main">
      <section className="main__content">
        <h2 className="main__title">Search results</h2>

        <div className="main__cards">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>

        <button type="button" className="main__button">
          Show more
        </button>
      </section>
    </main>
  );
}

export default Main;