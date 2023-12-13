import React, { useState, useEffect, useCallback } from "react";
import "../../styles/Carousel.css";

const Carousel = ({ boards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [restSecond, setRestSecond] = useState(4);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === boards.length - 1 ? 0 : prevIndex + 1
    );
    setRestSecond(4);
  }, [boards.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? boards.length - 1 : prevIndex - 1
    );
    setRestSecond(4);
  };

  const countDownOneSecond = useCallback(() => {
    setRestSecond(restSecond - 1);
    if (restSecond === 0) {
      goToNext();
      setRestSecond(4);
    }
  }, [goToNext, restSecond]);

  useEffect(() => {
    const interval = setInterval(countDownOneSecond, 1000);
    return () => clearInterval(interval);
  }, [countDownOneSecond]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {boards.map((board, index) => {
          return (
            <div
              key={index}
              className="carousel-item"
              style={{ backgroundImage: `url(${boards[currentIndex].image})` }}
            />
          );
        })}
      </div>
      <button className="arrowButton" onClick={goToNext}>
        &gt;
      </button>
      <button className="arrowButton" onClick={goToPrev}>
        &lt;
      </button>
    </div>
  );
};

export default Carousel;
