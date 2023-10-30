import React, { useState } from "react";
import Carousel from "../Carrusel/Carrusel";
import "./Cards.module.css"; 

const Cards = () => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const imageStyle = {
    maxWidth: "650px", 
    height: "auto", 
    marginLeft: "25px",
    marginRight: "25px",
  };

  return (
    <div className="card-container">
      <img
        src="/imagenpi.png"
        alt="Proyecto Individual"
        className="card-image"
        style={imageStyle}
        onClick={toggleDetail}
      />
      <img
        src="/imagenpf.png"
        alt="Proyecto Grupal"
        className="card-image"
        style={imageStyle}
        onClick={toggleDetail}
      />

      {showDetail && <Carousel className="carousel" />}
    </div>
  );
};

export default Cards;
