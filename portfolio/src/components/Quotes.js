import ContactForm from "./ContactForm";

export default function Quotes() {
  return (
    <div className="section quote">
      <div className="left-section">
        <div className="text">
          <h1 className="title">Get in contact with me</h1>
          <p className="info">
            If you want to know more about me, my projects or just want to say
            hi, feel free to connect with me on social media or send me an
            email.
          </p>
        </div>
        <div className="media-btn">
          <a
            className="media"
            href="https://twitter.com/martina_zurli"
            target="_blank"
          >
            <button className="btn">Twitter</button>
          </a>
          <a
            href="https://www.linkedin.com/in/martina-zurli-08b5b8286/"
            target="_blank"
          >
            <button className="btn">LinkedIn</button>
          </a>
          <a href="https://github.com/MartiZu" target="_blank">
            <button className="btn">GitHub</button>
          </a>
        </div>
      </div>
      <div className="col-side">
        <ContactForm />
      </div>
    </div>
  );
}
