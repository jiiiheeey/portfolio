import React, { useState, useEffect } from "react";
import interestList from "../assets/data/interestList.json";
import "./Carousel.css";
function Carousel() {
  return (
    <>
      <div className="carousel">
        <div className="carousel-container">
          <input name="carousel" type="radio" id="carousel1" className="carousel-items" checked />
          <input name="carousel" type="radio" id="carousel2" className="carousel-items" />
          <input name="carousel" type="radio" id="carousel3" className="carousel-items" />

          <div className="slidewrap">
            <ul className="slidelist">
              <li>
                <a>
                  <label for="carousel3" className="left"></label>
                  <div>11111</div>
                  <label for="carousel2" className="right"></label>
                </a>
              </li>
              <li>
                <a>
                  <label for="carousel2" className="left"></label>
                  <div>222</div>
                  <label for="carousel1" className="right"></label>
                </a>
              </li>
              <li>
                <a>
                  <label for="carousel1" className="left"></label>
                  <div>333</div>
                  <label for="carousel3" className="right"></label>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="carousel-button">버튼1</div>
        <div className="carousel-button">버튼2</div>
        <div className="carousel-button">버튼3</div>.
      </div>
    </>
  );
}

export default Carousel;
