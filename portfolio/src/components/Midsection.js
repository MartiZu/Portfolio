import React from "react";

export default function Midsection() {
  return (
    <div className="section improve-skills">
      <div className="col img">
        <img className="image-mid" src="/img/icons/graph.png" alt="graph" />
      </div>
      <div className="col text">
        <h1 className="title about-section">What brought me to coding?</h1>
        <p className="info about-section">
          Working on the frontline during the Covid19 pandemic left me with
          emotional scars and loss of passion for my job. I was forced to look
          at my life in a different perspective.{" "}
        </p>
        <p className="info about-section">
          I decided to take a leap of faith and follow my heart. Learning to
          code was something that brought back that spark into me and I am now
          looking forward to start my career and land my first job.
        </p>
      </div>
    </div>
  );
}
