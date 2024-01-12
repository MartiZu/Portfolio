import React from "react";
import Fragment from "./Fragment";

export default function Lastsection() {

  const images = [
    "/img/developer_gallery/image_part_001.jpg",
    "/img/developer_gallery/image_part_002.jpg",
    "/img/developer_gallery/image_part_003.jpg",
    "/img/developer_gallery/image_part_004.jpg",
    "/img/developer_gallery/image_part_005.jpg",
    "/img/developer_gallery/image_part_006.jpg",
    "/img/developer_gallery/image_part_007.jpg",
    "/img/developer_gallery/image_part_008.jpg",
    "/img/developer_gallery/image_part_009.jpg",
    "/img/developer_gallery/image_part_010.jpg",
    "/img/developer_gallery/image_part_011.jpg",
    "/img/developer_gallery/image_part_012.jpg",
    "/img/developer_gallery/image_part_013.jpg",
    "/img/developer_gallery/image_part_014.jpg",
    "/img/developer_gallery/image_part_015.jpg",
    "/img/developer_gallery/image_part_016.jpg",
    "/img/developer_gallery/image_part_017.jpg",
    "/img/developer_gallery/image_part_018.jpg",
    "/img/developer_gallery/image_part_019.jpg",
    "/img/developer_gallery/image_part_020.jpg",
    "/img/developer_gallery/image_part_021.jpg",
    "/img/developer_gallery/image_part_022.jpg",
    "/img/developer_gallery/image_part_023.jpg",
    "/img/developer_gallery/image_part_024.jpg",
    "/img/developer_gallery/image_part_025.jpg",
  ];
  return (
    <div className="section">
      <div className="col text">
        <h1 className="title">Why Tech?</h1>
        <p className="info">
          My partner is a software developer and he introduced me to the tech
          world. Seeing my interested in coding he encouraged me to do a
          bootcamp to learn the fundamentals and start adapting my logic and
          problem solving skills to a new and different environment.
        </p>
        <p className="info">
          As my bootcamp progressed, my passion and love for coding kept growing
          strong. It didn't take long for me to realise that this is what I want
          to do with my life.
        </p>
        <p className="info">Follow me or get in touch!</p>
      </div>
      <div className="col gallery">
        {images.map((image, index) => (
          <Fragment key={index} rsc={image} pt={"100%"} />
        ))}
      </div>
      {/* <div className="col img">
        <img className="image-last" src="/img/icons/bootcamp.png" alt="coding" />
      </div> */}
    </div>
  );
}
