import { useState } from 'react';
import React from 'react';
import { Link } from "react-router-dom";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "40px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "background-image 0.3s ease-in-out",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "2vh",
  fontSize: "45px",
  color: "#fff",
  zIndex: 2,
  // cursor: "pointer",
  transition: "color 0.8s",
};
rightArrowStyles[':hover'] = {
  color: "red", // Change this to the color you want when hovering
};

const expandedArrowStyles = {
  fontSize: '55px',
  transition: 'font-size 0.3s ease', // Added transition property for arrow expansion
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "2vh",
  fontSize: "45px",
  color: "#fff",
  zIndex: 2,
  // cursor: "pointer",
  scale: 1.05,
};

const sliderStyles = {
  position: "relative",
  height: "100%",
  
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  color: "white",
};





const ImageSlider = ({ slides, label, link, position, overlayColor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    fontSize: "2vw",
    fontWeight: "1000",
    color: "white",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
  };
  const labelStyle = {
    textShadow: "0 4px 10px black",
    position: "relative",
    top: position,
    zIndex: 2,
    width: "70%",
  };
  const Overlay = {
    background: overlayColor,
    position: "absolute",
    display: "flex",
    height: "100%",
    width: "100%",
    zIndex: "0",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: "40px",
  };
  
  

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        {/* <div style={text}>Assessment</div> */}
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <Link to= {link}>
        <div style={slideStylesWidthBackground}>
          <div style={Overlay}>
            <b style={labelStyle}>{label}</b>
          </div>
        </div>
      </Link>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
