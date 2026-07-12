import "./About.css";
import authorPhoto from "../../assets/author-photo.jpg";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <img
          className="about__image"
          src={authorPhoto}
          alt="Johnathan G. Virgil Jr."
        />

        <div className="about__text">
          <h2 className="about__title">About the author</h2>
          <p className="about__paragraph">
            My name is Johnathan G. Virgil Jr., and I am an aspiring full-stack software engineer with experience building projects using HTML, CSS, and JavaScript. I have developed responsive interfaces, implemented interactive features, and strengthened my problem-solving abilities through hands-on project work.
          </p>
          <p className="about__paragraph">
            During my time at TripleTen, I have expanded my understanding of modern web development by working with layouts, APIs, routing, and application logic. I am committed to continuing my growth as a developer and contributing to reliable, user-focused digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;