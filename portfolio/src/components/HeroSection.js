import React from "react";
import Fragment from "./Fragment";

export default function HeroSection() {
  const images = [
    "/img/gallery/image_part_001.jpg",
    "/img/gallery/image_part_002.jpg",
    "/img/gallery/image_part_003.jpg",
    "/img/gallery/image_part_004.jpg",
    "/img/gallery/image_part_005.jpg",
    "/img/gallery/image_part_006.jpg",
    "/img/gallery/image_part_007.jpg",
    "/img/gallery/image_part_008.jpg",
    "/img/gallery/image_part_009.jpg",
  ];

  return (
    <div className="section hero">
      <div className="col text">
        <h1 className="title">Welcome to my portfolio page</h1>
        <p className="info">
          On the 4th of September 23 I started my tech joureny with the{" "}
          <a href="https://www.schoolofcode.co.uk/course/">
            {" "}
            School of Code bootcamp.{" "}
          </a>
        </p>{" "}
        <p className="info">
          This is where I share my experiences about coding and tech.
          You can see my projects, but also find out more about me and what drove
          me to become a developer.
        </p>
        <button className="btn">About me</button>
      </div>
      <div className="col gallery">
        {images.map((image, index) => (
          <Fragment key={index} rsc={image} pt={"90%"} />
        ))}
      </div>
    </div>
  );
}
