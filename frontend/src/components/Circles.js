import { useState } from 'react';
import React from 'react';
import styles from "./Circles.css";

const Circles = () => {
  return (
    <div className="skill">
      <div className="outer">
        <div className="inner"> 
            <div id="number">
                65%
            </div>
        </div>
      </div>
      <svg className="circle_svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="30vh" height="30vh">
        <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
        </defs>
        <circle  stroke-linecap="round" />
    </svg>
    </div>
  );
};


export default Circles;
