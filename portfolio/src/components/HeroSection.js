import React from "react";
import Fragment from "./Fragment";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const images = [
    "/img/gallery/image1x1.jpg",
    "/img/gallery/image2x1.jpg",
    "/img/gallery/image3x1.jpg",
    "/img/gallery/image1x2.jpg",
    "/img/gallery/image2x2.jpg",
    "/img/gallery/image3x2.jpg",
    "/img/gallery/image1x3.jpg",
    "/img/gallery/image2x3.jpg",
    "/img/gallery/image3x3.jpg",
  ];

  return (
    <div className="section hero">
      <div className="col text">
        <h1 className="title">Hi, my name is Martina!</h1>
        <p className="info">
          On the 4th of September 23 I started my tech journey with the{" "}
          <a href="https://www.schoolofcode.co.uk/course/" className="bootcamp">
            {" "}
            School of Code bootcamp.{" "}
          </a>
        </p>{" "}
        <p className="info">
        I live in London, I am a former nurse and psychotherapist who discovered a passion for coding and decided to translate her problem-solving skills into tech as a developer.
        </p>
        <p className="info">This page is for me to display some of the projects I have worked on and tell you a bit more about myself.
        </p>
        <Link to="/about"><button className="btn">About me</button></Link>
      </div>
            {/* <div className="col text">
        <h1 className="title">Welcome to my portfolio page</h1>
        <p className="info">
          On the 4th of September 23 I started my tech joureny with the{" "}
          <a href="https://www.schoolofcode.co.uk/course/">
            {" "}
            School of Code bootcamp.{" "}
          </a>
        </p>{" "}
        <p className="info">
          This is where I share my experiences about coding and tech. You can
          see my projects, but also find out more about me and what drove me to
          become a developer.
        </p>
        <button className="btn">About me</button>
      </div> */}
      <div className="col gallery">
        {images.map((image, index) => (
          <Fragment key={index} rsc={image} pt={"100%"} />
        ))}
      </div>
    </div>
  );
}
