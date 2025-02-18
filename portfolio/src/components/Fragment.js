import React from "react";

export default function Fragment({ rsc, pt }) {
  return (
    <div className="custom-image" style={{ paddingTop: pt }}>
      <img src={rsc} alt="picture_of_Martina" />
    </div>
  );
}
