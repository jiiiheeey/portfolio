import React, { useState, useRef, useEffect } from "react";
import interestList from "../assets/data/interestList.json";
import slide from "../assets/img/slide.jpg";
import "./Carousel.css";
function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = 2; //3장
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션
  }, [currentSlide]);
  return (
    <>
      <div className="container">
        <div className="text">
          <h1>Carousel</h1>
          <p>
            {currentSlide + 1} / {TOTAL_SLIDES + 1}
          </p>
        </div>
        <div className="sildercontainer" ref={slideRef}>
          <div className="slide">
            <img src={slide} width="500px" alt="" />
            <h3>안녕안녕</h3>
          </div>
          <div className="slide">
            <img src={slide} width="500px" alt="" />
            <h3>내이름은</h3>
          </div>
          <div className="slide">
            <img src={slide} width="500px" alt="" />
            <h3>지혜야</h3>
          </div>
        </div>
        <div className="center">
          <div className="button" onClick={PrevSlide}>
            Prev
          </div>
          <div className="button" onClick={NextSlide}>
            Next
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
