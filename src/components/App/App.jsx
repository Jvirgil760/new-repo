import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Preloader from "../Preloader/Preloader";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <About />
      <Footer />

      {/* Temporary placeholders so components exist */}
      <Preloader />
      <LoginModal />
      <RegisterModal />
    </div>
  );
}

export default App;