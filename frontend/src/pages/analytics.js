import React, { useState } from 'react';
import ImageSlider from "../components/ImageSlider";
import DetectedSymtomsBars from "../components/DetectedSymtomsBars";
import styles from "./analytics.module.css";
//import { Link } from "react-router-dom";

// Data Retrieval Classes
import { UserService } from "../service/userService";
import { EventEmitter } from "../service/eventEmitter";
import { DataParse } from "../service/dataParse";

const slides1 = [
  { url: "http://localhost:3000/male-student.jpeg", title: "beach" },
  { url: "http://localhost:3000/image-2.jpg", title: "boat" },
  { url: "http://localhost:3000/image-3.jpg", title: "forest" },
  { url: "http://localhost:3000/image-4.jpg", title: "city" },
  { url: "http://localhost:3000/image-5.jpg", title: "italy" },
];

const slides2 = [
  { url: "http://localhost:3000/Professional-development-1024x682-1.jpeg", title: "beach" },
  { url: "http://localhost:3000/image-2.jpg", title: "boat" },
  { url: "http://localhost:3000/image-3.jpg", title: "forest" },
  { url: "http://localhost:3000/image-4.jpg", title: "city" },
  { url: "http://localhost:3000/image-5.jpg", title: "italy" },
];


const slides3 = [
  { url: "http://localhost:3000/pexels-emmy-e-2381069.jpg", title: "beach" },
  { url: "http://localhost:3000/image-2.jpg", title: "boat" },
  { url: "http://localhost:3000/image-3.jpg", title: "forest" },
  { url: "http://localhost:3000/image-4.jpg", title: "city" },
  { url: "http://localhost:3000/image-5.jpg", title: "italy" },
];


function Analytics() {
  // Data Retrieval Setup
  const [userData, setUserData] = useState(null);
  EventEmitter.subscribe("getUserData", setUserData);
  if (userData == null) {
    UserService.eventDispatch();
  }
  const dataParse = new DataParse(userData);


  // State to control whether the details are expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.analyticsV2}>

      {/* Header Bar */}
      <div className={styles.headerBar} />

      {/* Main Content Area */}
      <div className={`${styles.panelList} ${isExpanded ? styles.expandedPanel : ''}`}>

        {/* Expanded Left Section - More Information */}
        {isExpanded && (
          <div className={styles.moreInformationPanel}>
            <div className={styles.messageResult}>
            <h2>You are born a champion!</h2>
            <div className={styles.messageResultP}>
            <p>Your survey results show you have a greart character when it comes to deling with stress but may need some help maintaining your emotional balance. Dont worry! Everyone has room to grow, read to find out how!</p>
            </div>
            </div>
            <h2>Question Analysis</h2>
            {/* Button Container with Circular Buttons */}
            <div className={styles.buttonContainer}>
                {Array.from({ length: 10 }, (_, i) => (
                  <button key={i} className={styles.circleButton}>
                    {i + 1}
                  </button>
                 ))}
              </div>
            <div className={styles.informationBox}>
              <h3>Question 1</h3>
              <p>Lorem ipsum dolor sit amet...</p>
              <h3>Response</h3>
              <p>Consectetur adipiscing elit...</p>
              <h3>Symptom</h3>
              <p>Sed do eiusmod tempor incididunt...</p>
            </div>
            </div>
        )}

        {/* Collapsed Left Section - Your Results and Next Steps */}
        {!isExpanded && (
          <div className={styles.blueMainPanel}>
            <b className={styles.yourResultsAndContainer}>
              <p className={styles.yourResults}>Your Results and Next Steps:</p>
            </b>
            <a href="https://www.example.com">
//             <img src="http://localhost:3000/Union.png" alt="Icon Description" className={styles.previousBar}></img>
//             <img src="http://localhost:3000/previousIcon.png" alt="Icon Description" className={styles.previousIcon}></img>
//           </a>
          </div>
        )}

        {/* Right Section - Detected Symptoms */}
        <div className={`${styles.detectedSymptomsMainPanel} ${isExpanded ? styles.expandedPanel : ''}`}>
          <div className={styles.analyticsV2Child4} />
          <b className={styles.detectedSymptoms}>Detected Symptoms</b>
          <div className="barz">
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
          <div className={styles.analyticsV2Child24} />
          <img className={styles.analyticsV2Child25} alt="" src="/ellipse-13.svg" />
          <DetectedSymtomsBars />
          </div>
          {/* Conditionally rendered Expand/Exit button */}
          <button onClick={toggleExpand} className={styles.toggleButton}>
            {isExpanded ? '>' : '<'}
          </button>
        </div>
      </div>
      
      <img src="http://localhost:3000/Vector.png" alt="Icon Description" className={styles.vectorGraphic}></img>
      <div className={styles.nextStepsContainer}>
        <b className={styles.nextStepsContainerText}> Your Next Steps: </b>
        <div className={styles.containerList}>
          <div className={styles.containerStyles}>
            <ImageSlider slides = {slides1}/>
          </div>
          <div className={styles.containerStyles}>
            <ImageSlider slides = {slides2}/>
          </div>
          <div className={styles.containerStyles}>
            <ImageSlider slides = {slides3}/>
          </div>
        </div>
      </div>
      <a href="https://www.example.com">
        <img src="http://localhost:3000/Goback.png" alt="Icon Description" className={styles.back_button}></img>
      </a>
      <div className={styles.footerBar} />
    </div>
  );
};

export default Analytics;
