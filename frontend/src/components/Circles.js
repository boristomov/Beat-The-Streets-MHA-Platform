import { useState } from 'react';
import React from 'react';
import styles from "./Circles.css";

const Circles = ({size, percentage}) => {
  const circleSize = `${size}vh`;
  const innerSize = size - 4;
  const innerCircleSize = `${innerSize}vh`;
  const _radius = size/2 - 1;
  const radius = `${_radius}vh`;
  const _cx_vh = size/2;
  const cx_vh = `${_cx_vh}vh`;
  return (
    <div style={{height:circleSize,width:circleSize}} className="skill">
      <div style={{height:circleSize,width:circleSize}} className="outer">
        <div style={{height:innerCircleSize ,width:innerCircleSize}} className="inner"> 
            <div id="number">
                {percentage}%
            </div>
        </div>
      </div>
      <svg className="circle_svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width={circleSize} height={circleSize} >
        <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
        </defs>
        <circle  r={radius} cx={cx_vh} cy={cx_vh} stroke-linecap="round" />
    </svg>
    </div>
  );
};


export default Circles;
