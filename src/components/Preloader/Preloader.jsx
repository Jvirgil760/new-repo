import "./Preloader.css";

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__content">
        <div className="preloader__spinner" />
        <p className="preloader__text">Searching for news...</p>
      </div>
    </section>
  );
}

export default Preloader;