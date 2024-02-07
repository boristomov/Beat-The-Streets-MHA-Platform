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
// const userData = UserService.getUserData();
// let data_parser;
// console.log(userData)
// userData.then(result => {
//   const data = result
//   const data_parser = new DataParse(data);
//   console.log(data_parser)
// })

// const assessment_data = data_parser.getMostRecentAssessments();





const slides1 = [
  { url: "http://localhost:3000/professional_pic3.jpeg", title: "beach" },
  { url: "http://localhost:3000/slider_pic5.jpg", title: "boat" },
  { url: "http://localhost:3000/slider_pic7.jpg", title: "forest" },
];

const slides2 = [
  { url: "http://localhost:3000/professional_pic1.jpeg", title: "beach" },
  { url: "http://localhost:3000/image-2.jpg", title: "boat" },
  { url: "http://localhost:3000/image-3.jpg", title: "forest" },
  
];


const slides3 = [
  { url: "http://localhost:3000/professional_pic2.jpg", title: "beach" },
  { url: "http://localhost:3000/healthy.jpg", title: "boat" },
  { url: "http://localhost:3000/image-3.jpg", title: "forest" },
  
];


function Analytics() {
  // Data Retrieval Setup
  
  const [assessmentData, setAssessmentData] = useState({});
  const [scores, setScores] = useState({});
  useEffect(() => {
    const userDataPromise = UserService.getUserData();
    userDataPromise.then(result => {
      const data = result;
      const dataParser = new DataParse(data);
      const parsedData = dataParser.getAssessmentData();
      setAssessmentData(parsedData);
      console.log('Parsed data:', parsedData);
      // Log assessmentData after it's been updated
      console.log('Assessment data:', parsedData);
      
      // Calculate scores after assessmentData is set
      const calculateScores = (assessmentData) => {
        const maxScores = {
          Depression: 0,
          Anxiety: 0,
          Stress: 0,
          'Self-esteem': 0,
          'Cultural Sensitivity': 0,
          'Quality of Life': 0,
          PTSD: 0,
        };
        const userScores = {
          Depression: 0,
          Anxiety: 0,
          Stress: 0,
          'Self-esteem': 0,
          'Cultural Sensitivity': 0,
          'Quality of Life': 0,
          PTSD: 0,
        };
      
        assessmentData[0].questions.forEach((question) => {
          // Increment maximum score based on question weights
          Object.keys(maxScores).forEach((category) => {
            maxScores[category] += question[category];
          });
      
          // Increment user score if the user responded positively
          if (question.user_response) {
            Object.keys(userScores).forEach((category) => {
              userScores[category] += question[category];
            });
          }
        });
      
        // Calculate percentages
        const percentages = {};
        Object.keys(maxScores).forEach((category) => {
          // Prevent division by zero
          if (maxScores[category] !== 0) {
            percentages[category] = Math.floor((userScores[category] / maxScores[category]) * 100);
          } else {
            percentages[category] = 0;
          }
        });
      
        return percentages;
      };
      
      // Call calculateScores with parsedData
      setScores(calculateScores(parsedData));
      
    });
  }, []);
  console.log('scores', scores);

  
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
      // console.log("handleScroll called");
      if (!isExpanded){
        // console.log("handleScroll not expanded");
        const value = window.scrollY;
        // console.log("scroll value:", value);
        // yourResults.style.top = Math.min(value * 1.45 , 100) + 'vh';
        yourResults.style.top =  value * 0.15  + 'vh';
        // console.log("scroll value:", yourResults);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isExpanded]);


 
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
            <div className = {styles.DetectedSymtomsHeader}> Detected Symptoms </div>
            <DetectedSymtomsBars id = "elementToHide" percentage={scores['Anxiety']} color={"aqua"} category={"Anxiety"} />
            <DetectedSymtomsBars id = "elementToHide" percentage={scores['Quality of Life']} color={"orange"} category={"Quality of Life"}/>
            <DetectedSymtomsBars id = "elementToHide" percentage={scores['PTSD']} color={"gold"} category={"PTSD"}/>
            <DetectedSymtomsBars id = "elementToHide" percentage={scores['Cultural Sensitivity']} color={"#d8bfd8"} category={"Cultural Sensitivity"}/>
            <DetectedSymtomsBars id = "elementToHide" percentage={scores['Stress']} color={"lightgreen"} category={"Stress"}/>
            <DetectedSymtomsBars id = "elementToHide" percentage={scores['Self-esteem']} color={"pink"} category={"Self-Esteem"}/>
            <DetectedSymtomsBars id = "elementToHide" percentage={scores['Depression']} color={"red"} category={"Depression"}/>
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
            
            <ImageSlider slides = {slides1} label = {"Depression Tips"} position={'-20vh'} overlayColor={'linear-gradient(180deg, rgba(253, 132, 28, 0.90) 10%, transparent 60%)'}/>
          </div>
          <div className={styles.containerStyles}>
            
            <ImageSlider slides = {slides2} label = {"Overcoming the effects of PTSD"} position={'-20vh'} overlayColor={'linear-gradient(180deg, rgba(253, 132, 28, 0.90) 10%, transparent 60%)'}/>
          </div>
          <div className={styles.containerStyles}>
            
            <ImageSlider slides = {slides3} label = {"Improving daily habits"} position={'-20vh'} overlayColor={'linear-gradient(180deg, rgba(253, 132, 28, 0.90) 10%, transparent 60%)'}/>
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
