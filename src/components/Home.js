import React, { useState } from "react";
import "./style.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardsData from "./CardData";

import CaroueselCard from "./CaroueselCard";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [cartData, setCartData] = useState(cardsData);
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(addToCart(e));
  };

  return (
    <>
      <CaroueselCard />
      <section className="item_section container mt-4">
        <div className="row mt-2 d-flex justify-content-around align-items-center ">
          {cartData.map((element, index) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
                key={index}
              >
                <Card
                  style={{
                    width: "100%",
                    color: "white",
                    border: "none",
                    background: "black",
                    padding: "10px",
                  }}
                  className="hove"
                >
                  <Card.Img
                    variant="top"
                    className="cd"
                    src={element.imgdata}
                  />

                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.dish}</h4>
                      <span>{element.rating}&nbsp;★</span>
                    </div>

                    <div className="lower_data d-flex justify-content-between">
                      <h5>{element.address}</h5>
                      <span>₹ {element.price}</span>
                    </div>
                    <div className="extra"></div>

                    <div className="last_data d-flex justify-content-between align-items-center">
                      <img src={element.arrimg} className="limg" alt="" />
                      <Button
                        style={{
                          width: "150px",
                          color: "white",
                          background: "red",
                          border: "none",
                        }}
                        variant="outline-light"
                        className="mt-2 mb-2"
                        onClick={() => send(element)}
                      >
                        Add TO Cart
                      </Button>
                      <img src={element.delimg} className="laimg" alt="" />
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
