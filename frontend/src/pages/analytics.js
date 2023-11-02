import React from 'react';
import ImageSlider from "../components/ImageSlider";
import DetectedSymtomsBars from "../components/DetectedSymtomsBars";
import styles from "./analytics.module.css";
import { Link } from "react-router-dom";

const slides = [
  { url: "http://localhost:3000/image-1.jpg", title: "beach" },
  { url: "http://localhost:3000/image-2.jpg", title: "boat" },
  { url: "http://localhost:3000/image-3.jpg", title: "forest" },
  { url: "http://localhost:3000/image-4.jpg", title: "city" },
  { url: "http://localhost:3000/image-5.jpg", title: "italy" },
];
const containerStyles = {
  width: "500px",
  height: "280px",
  // margin: "0 auto",
};

function Analytics({ userService }) {
  return (
    <div className={styles.analyticsV2}>
      <div className={styles.analyticsV2Child} />
      <div className={styles.analyticsV2Item} />
      <b className={styles.yourResultsAndContainer}>
        <p className={styles.yourResults}>{`Your Results `}</p>
        <p className={styles.yourResults}>and Next Steps:</p>
      </b>
      {/* <div className={styles.analyticsV2Inner} /> */}
      
      {/* <img
        className={styles.foundationarrowUpIcon}
        alt=""
        src="/foundationarrowup.svg"
      /> */}
        <div style={containerStyles}>
          <ImageSlider slides = {slides}/>
        </div>
      {/* <div
        className={styles.wordsWordswordsWor}
      >{`words wordswords wor dswords wor words wordsvwords cwords wordsw ordswordswo rdswor words wordsvwords words w or ds words words wordswords wor dswords wor words wordsvwords `}</div>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.foundationarrowUpIcon1}
        alt=""
        src="/foundationarrowup.svg"
      />
      <div
        className={styles.wordsWordswordsWor1}
      >{`words wordswords wor dswords wor words wordsvwords cwords wordsw ordswordswo rdswor words wordsvwords words w or ds words words wordswords wor dswords wor words wordsvwords `}</div>
      <div className={styles.analyticsV2Child1} />
      <img
        className={styles.foundationarrowUpIcon2}
        alt=""
        src="/foundationarrowup.svg"
      />
      <div
        className={styles.wordsWordswordsWor2}
      >{`words wordswords wor dswords wor words wordsvwords cwords wordsw ordswordswo rdswor words wordsvwords words w or ds words words wordswords wor dswords wor words wordsvwords `}</div> */}
      <div className={styles.analyticsV2Child2} />
      <div className={styles.analyticsV2Child3} />
      <div className={styles.analyticsV2Child4} />
      <b className={styles.detectedSymptoms}>Detected Symptoms</b>
      <div className={styles.analyticsV2Child5} />
      <div className={styles.analyticsV2Child6} />
      <div className={styles.analyticsV2Child7} />
      <div className={styles.analyticsV2Child8} />
      <div className={styles.analyticsV2Child9} />
      <div className={styles.analyticsV2Child10} />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-6.svg" />
      <div className={styles.analyticsV2Child11} />
      <img className={styles.analyticsV2Child12} alt="" src="/ellipse-7.svg" />
      <div className={styles.analyticsV2Child13} />
      <img className={styles.analyticsV2Child14} alt="" src="/ellipse-9.svg" />
      <div className={styles.analyticsV2Child15} />
      <img className={styles.analyticsV2Child16} alt="" src="/ellipse-10.svg" />
      <div className={styles.analyticsV2Child17} />
      <img className={styles.analyticsV2Child18} alt="" src="/ellipse-11.svg" />
      <div className={styles.analyticsV2Child19} />
      <img className={styles.analyticsV2Child20} alt="" src="/ellipse-12.svg" />
      <div className={styles.analyticsV2Child21} />
      <img className={styles.analyticsV2Child22} alt="" src="/ellipse-8.svg" />
      <div className={styles.analyticsV2Child23} />
      <DetectedSymtomsBars />
      <div className={styles.analyticsV2Child24} />
      <img className={styles.analyticsV2Child25} alt="" src="/ellipse-13.svg" />
    </div>
  );
};

export default Analytics;
