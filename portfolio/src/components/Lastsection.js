import React from "react";

export default function Lastsection() {
  return (
    <div className="section">
      <div className="col text">
        <h1 className="title">Why Tech?</h1>
        <p className="info">
          My partner is a software developer and he so he introduced me to the
          world of coding and shared with me his passion for tech. It didn't
          take long for me to realise that this is what I want to do with my
          life.
        </p>
        <p className="info">Follow me or get in touch!</p>
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
          <button className="btn">martina.zurli@gmail.com</button>
        </div>
      </div>
      <div className="col gallery"></div>
    </div>
  );
}
