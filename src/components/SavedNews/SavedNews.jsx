import "./SavedNews.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedNews() {
  return (
    <div className="saved-news">
      <Header />
      <main className="saved-news__content">
        <h1>Saved Articles</h1>
      </main>
      <Footer />
    </div>
  );
}

export default SavedNews;