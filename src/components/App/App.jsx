import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import { getNews } from "../../utils/newsApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


function HomePage({
  onLoginClick,
  onLogoutClick,
  isLoginOpen,
  isRegisterOpen,
  isSuccessOpen,
  onCloseLogin,
  onCloseRegister,
  onCloseSuccess,
  onOpenRegister,
  onOpenLogin,
  onSuccessToLogin,
  onSearch,
  isLoading,
  hasSearched,
  requestError,
  cards,
  cardsToShow,
  onShowMore,
  currentUser,
  onLogin,
  onRegister,
  onToggleSave,
}) {
  return (
    <>
      <Header
        isLoggedIn={!!currentUser}
        isLight={false}
        userName={currentUser ? currentUser.username : "Johnathan"}
        onLoginClick={onLoginClick}
        onLogoutClick={onLogoutClick}
        onSearch={onSearch}
      />

      <Main
        isLoading={isLoading}
        hasSearched={hasSearched}
        requestError={requestError}
        cards={cards}
        cardsToShow={cardsToShow}
        onShowMore={onShowMore}
        isLoggedIn={!!currentUser}
        onToggleSave={onToggleSave}
      />

      <About />
      <Footer />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={onCloseLogin}
        onSwitchToRegister={onOpenRegister}
        onLogin={onLogin}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={onCloseRegister}
        onSwitchToLogin={onOpenLogin}
        onRegister={onRegister}
      />

      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={onCloseSuccess}
        onSwitchToLogin={onSuccessToLogin}
      />
    </>
  );
}

function App() {
  const navigate = useNavigate();

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [registeredUser, setRegisteredUser] = useState(() => {
    const savedUser = localStorage.getItem("registeredUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState(() => {
    const savedCards = localStorage.getItem("savedArticles");
    return savedCards ? JSON.parse(savedCards) : [];
  });

  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [requestError, setRequestError] = useState("");
  const [cardsToShow, setCardsToShow] = useState(3);

  function mergeSavedState(newsArticles) {
    return newsArticles.map((article) => ({
      ...article,
      isSaved: savedArticles.some((savedCard) => savedCard.url === article.url),
    }));
  }

  async function handleSearch(query) {
    setHasSearched(true);
    setIsLoading(true);
    setRequestError("");
    setCardsToShow(3);

    try {
      const newsArticles = await getNews(query);
      setArticles(mergeSavedState(newsArticles));
    } catch (err) {
      console.error(err);
      setArticles([]);
      setRequestError(
        "Sorry, something went wrong during the request. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleShowMore() {
    setCardsToShow((prev) => prev + 3);
  }

  function handleRegister({ email, password, username }) {
    const user = { email, password, username };

    setRegisteredUser(user);
    localStorage.setItem("registeredUser", JSON.stringify(user));
    setIsRegisterOpen(false);
    setIsSuccessOpen(true);
  }

  function handleLogin({ email, password }) {
    const savedUser =
      registeredUser || JSON.parse(localStorage.getItem("registeredUser"));

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      setCurrentUser(savedUser);
      localStorage.setItem("currentUser", JSON.stringify(savedUser));
      setIsLoginOpen(false);
    } else {
      alert("Incorrect email or password");
    }
  }

  function handleToggleSave(article) {
    if (!currentUser) {
      setIsLoginOpen(true);
      return;
    }

    const isAlreadySaved = savedArticles.some(
      (savedCard) => savedCard.url === article.url
    );

    let updatedSavedArticles;

    if (isAlreadySaved) {
      updatedSavedArticles = savedArticles.filter(
        (savedCard) => savedCard.url !== article.url
      );
    } else {
      updatedSavedArticles = [{ ...article, isSaved: true }, ...savedArticles];
    }

    setSavedArticles(updatedSavedArticles);
    localStorage.setItem("savedArticles", JSON.stringify(updatedSavedArticles));

    setArticles((prevArticles) =>
      prevArticles.map((item) =>
        item.url === article.url
          ? { ...item, isSaved: !isAlreadySaved }
          : item
      )
    );
  }

  function handleDeleteSaved(article) {
    const updatedSavedArticles = savedArticles.filter(
      (savedCard) => savedCard.url !== article.url
    );

    setSavedArticles(updatedSavedArticles);
    localStorage.setItem("savedArticles", JSON.stringify(updatedSavedArticles));

    setArticles((prevArticles) =>
      prevArticles.map((item) =>
        item.url === article.url ? { ...item, isSaved: false } : item
      )
    );
  }

  function handleOpenLogin() {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  }

  function handleCloseLogin() {
    setIsLoginOpen(false);
  }

  function handleOpenRegister() {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  }

  function handleCloseRegister() {
    setIsRegisterOpen(false);
  }


  function handleCloseSuccess() {
    setIsSuccessOpen(false);
  }

  function handleSuccessToLogin() {
    setIsSuccessOpen(false);
    setIsLoginOpen(true);
  }

  function handleLogout() {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    navigate("/");
  }

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onLoginClick={handleOpenLogin}
              onLogoutClick={handleLogout}
              isLoginOpen={isLoginOpen}
              isRegisterOpen={isRegisterOpen}
              isSuccessOpen={isSuccessOpen}
              onCloseLogin={handleCloseLogin}
              onCloseRegister={handleCloseRegister}
              onCloseSuccess={handleCloseSuccess}
              onOpenRegister={handleOpenRegister}
              onOpenLogin={handleOpenLogin}
              onSuccessToLogin={handleSuccessToLogin}
              onSearch={handleSearch}
              isLoading={isLoading}
              hasSearched={hasSearched}
              requestError={requestError}
              cards={articles}
              cardsToShow={cardsToShow}
              onShowMore={handleShowMore}
              currentUser={currentUser}
              onLogin={handleLogin}
              onRegister={handleRegister}
              onToggleSave={handleToggleSave}
            />
          }
        />

        <Route
          path="/saved-news"
          element={
          <ProtectedRoute is isLoggedIn={!!currentUser}>
            <SavedNews
              cards={savedArticles}
              currentUser={currentUser}
              onDeleteSaved={handleDeleteSaved}
            />
          </ProtectedRoute>
          }
        />
      </Routes>
      <div></div>
    </div>
  );
}

export default App;