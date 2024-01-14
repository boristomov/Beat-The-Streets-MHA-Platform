import { useState } from 'react';
import React from 'react';

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
  zIndex: 1,
  cursor: "pointer",
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
  zIndex: 1,
  cursor: "pointer",
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
// const text = {
//   position: "absolute",
//   top: "50%",
//   left: "10%",
//   right: "10%",
// }



const ImageSlider = ({ slides, label }) => {
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
      <div style={slideStylesWidthBackground}>
        <b style={labelStyle}>{label}</b>
      </div>
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
