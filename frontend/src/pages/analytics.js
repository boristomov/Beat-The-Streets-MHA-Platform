import React, { useState } from 'react';
import ImageSlider from "../components/ImageSlider";
import DetectedSymtomsBars from "../components/DetectedSymtomsBars";
import styles from "./analytics.module.css";
import { Link } from "react-router-dom";
import bubbles_bottom_left from "../assets/login/bubbles_bottom_left.svg";
import bubbles_top_right from "../assets/login/bubbles_top_right.svg";
import Navbar from '../components/Navbar';
import Circles from "../components/Circles";
// Data Retrieval Classes
import { useEffect } from 'react';
import { UserService } from "../service/userService";
import { EventEmitter } from "../service/eventEmitter";
import { DataParse } from "../service/dataParse";

// User result processing
// const dataParser = new DataParse(userData);
// const assessment_data = dataParser.getMostRecentAssessments();
// console.log(assessment_data);


const slides1 = [
  { url: "http://localhost:3000/editedmalestudent.png", title: "beach" },
  { url: "http://localhost:3000/image-2.jpg", title: "boat" },
  { url: "http://localhost:3000/image-3.jpg", title: "forest" },
  { url: "http://localhost:3000/image-4.jpg", title: "city" },
  { url: "http://localhost:3000/image-5.jpg", title: "italy" },
];

const slides2 = [
  { url: "http://localhost:3000/femaleprofessional.png", title: "beach" },
  { url: "http://localhost:3000/image-2.jpg", title: "boat" },
  { url: "http://localhost:3000/image-3.jpg", title: "forest" },
  { url: "http://localhost:3000/image-4.jpg", title: "city" },
  { url: "http://localhost:3000/image-5.jpg", title: "italy" },
];


const slides3 = [
  { url: "http://localhost:3000/proffemale.png", title: "beach" },
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
    if (!isExpanded) {
      const yourResults = document.getElementById('yourResults');
      yourResults.style.top = ''; // Reset to default value
    }
  };

  useEffect(() => {
    const yourResults = document.getElementById('yourResults');

  
  
    const handleScroll = () => {
      console.log("handleScroll called");
      if (!isExpanded){
        console.log("handleScroll not expanded");
        const value = window.scrollY;
        console.log("scroll value:", value);
        // yourResults.style.top = Math.min(value * 1.45 , 100) + 'vh';
        yourResults.style.top =  value * 0.15  + 'vh';
        console.log("scroll value:", yourResults);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // document.getElementById('expandButton').addEventListener('click', function() {
  //   var elementToHide = document.getElementById('elementToHide');
  //   elementToHide.style.display = 'none'; // or 'visibility: hidden;' for hiding without collapsing the space
  // });

 
  return (
    <div className={styles.analyticsV2}>
      {/* Main Content Area */}
      <div className={`${styles.panelList} ${isExpanded ? styles.expandedPanel : ''}`}>

        {/* Expanded Left Section - More Information */}
        {isExpanded && (
          <div className={styles.moreInformationPanel}>
            <div className={styles.messageResult}>
              <h2>You are born a champion!</h2>
              <div className={styles.messageResultP}>
                <p>Your survey results show you have a greart character when it comes to dealing with stress but may need some help maintaining your emotional balance. Dont worry! Everyone has room to grow, read to find out how!</p>
              </div>
              <div className={styles.analyticsCircles}> 
                <Circles size={20} percentage={67}/>
                <Circles size={25} percentage={80}/>
                <Circles size={20} percentage={43}/>
              </div>
            </div>
            
            {/* Conditionally rendered Expand/Exit button */}
            <div id = 'expandButton' onClick={toggleExpand} className={styles.toggleButton}>
              {isExpanded ?
                <div id = 'expandButton' className={styles.toggleOff}/> 
                : 
                <div id = 'expandButton' className = {styles.toggleOn}/>
              }
            </div>
          </div>
        )}
        

        {/* Collapsed Left Section - Your Results and Next Steps */}
        {!isExpanded && (
          <div id="blueMainPanel" className={styles.blueMainPanel}>
            <b className={styles.yourResultsAndContainer}>
              <p id="yourResults" className={styles.yourResults}>Your Results are here!</p>
            </b>
            <Link className={styles.link_back} to="/home">
             <img src="http://localhost:3000/Union.png" alt="Icon Description" className={styles.previousBar}></img>
             <img src="http://localhost:3000/icons8-next-96.png" alt="Icon Description" className={styles.previousIcon}></img>
            </Link>
            {/* BACKGROUND BUILDING GRAPHIC */}
            <img src="http://localhost:3000/b_svg.svg" alt="" className={styles.vectorGraphic}/>
                {/* Conditionally rendered Expand/Exit button */}
            <div onClick={toggleExpand} className={styles.toggleButton}>
              {isExpanded ?
                <div className={styles.toggleOff}> 
                  <b className={styles.buttonFont}>Back to Results</b>
                </div> 
                : 
                <div className = {styles.toggleOn}>
                  <b className={styles.buttonFont}>Learn More</b>
                </div>
              }
            </div>
          </div>
        )}

        
        {/* Right Section - Detected Symptoms */}
        {!isExpanded && (  
          
          <div className={`${styles.detectedSymptomsMainPanel} ${isExpanded ? styles.expandedPanel : ''}`}>
            <DetectedSymtomsBars id = "elementToHide" percentage={60} color={"aqua"} category={"Anxiety"} />
            <DetectedSymtomsBars id = "elementToHide" percentage={45} color={"orange"} category={"Quality of Life"}/>
            <DetectedSymtomsBars id = "elementToHide" percentage={80} color={"gold"} category={"PTSD"}/>
            <DetectedSymtomsBars id = "elementToHide" percentage={100} color={"#d8bfd8"} category={"Cultural Sensitivity"}/>
            <DetectedSymtomsBars id = "elementToHide" percentage={55} color={"lightgreen"} category={"Stress"}/>
            <DetectedSymtomsBars id = "elementToHide" percentage={80} color={"pink"} category={"Self-Esteem"}/>
            <DetectedSymtomsBars id = "elementToHide" percentage={100} color={"red"} category={"Depression"}/>
            {/* Bubbles */}
            <img src="http://localhost:3000/bubbles1.png" alt="" className={styles.bubbles1}></img>
          </div> 
        )}
      </div>
      
      {/* Next Steps panels container */}
      <div className={styles.nextStepsContainer}>
        {/* Bubbles */}
        <img src="http://localhost:3000/bubbles1.png" alt="" className={styles.bubbles2}></img>
        <img className={styles.bubbleright1} alt="" src={bubbles_bottom_left} />
        <b className={styles.nextStepsContainerText}> Your Next Steps: </b>
        <div className={styles.containerList}>
          <div className={styles.containerStyles}>
            <div className={styles.testingOverlay}></div>
            <ImageSlider slides = {slides1}/>
          </div>
          <div className={styles.containerStyles}>
            <div className={styles.testingOverlay}></div>
            <ImageSlider slides = {slides2}/>
          </div>
          <div className={styles.containerStyles}>
            <div className={styles.testingOverlay}></div>
            <ImageSlider slides = {slides3}/>
          </div>
        </div>
      </div>
      {/* Go back */}
      <Link to="/home">
        <img src="http://localhost:3000/icons8-next-96.png" alt="Icon Description" className={styles.back_button}></img>
      </Link>
      <div className={styles.footerBar} />
    </div>
  );
};

export default Analytics;
