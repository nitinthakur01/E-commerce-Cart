import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner from "./banner.jpg";
import "./CaroueselCard.css";

function CaroueselCard() {
  return (
    <div>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={Banner}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CaroueselCard;
