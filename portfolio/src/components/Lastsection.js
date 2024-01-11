import React from "react";

export default function Lastsection() {
  return (
    <div className="section">
      <div className="col text">
        <h1 className="title">Why Tech?</h1>
        <p className="info">
          My partner is a software developer and he introduced me to the tech 
          world. Seeing my interested in coding he encouraged me to do a bootcamp 
          to learn the fundamentals and start adapting my logic and problem solving skills to a new and different environment. 
        </p>
        <p className="info">As my bootcamp progressed, my passion and love for coding kept growing strong. 
        It didn't take long for me to realise that this is what I want to do with my life.</p>
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
