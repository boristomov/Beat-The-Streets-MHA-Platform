import React, { useState } from 'react';
import ImageSlider from "../components/ImageSlider";
import DetectedSymtomsBars from "../components/DetectedSymtomsBars";
import styles from "./analytics.module.css";
import { Link } from "react-router-dom";
import bubbles_bottom_left from "../assets/login/bubbles_bottom_left.svg";
import bubbles_top_right from "../assets/login/bubbles_top_right.svg";
import { useEffect } from 'react';
// Data Retrieval Classes
import { UserService } from "../service/userService";
import { EventEmitter } from "../service/eventEmitter";
import { DataParse } from "../service/dataParse";

// let yourResults = document.getElementById('yourResults');
// let right_panel = document.getElementById('right_panel');
// let big_rectangle = document.getElementById('big_rectangle');

// window.addEventListener('scroll', function(){
//   let value = window.scrollY;
//   console.log("scroll value:", value);
//   yourResults.styles.top = value*1.05 + 'px';
//   console.log("scroll value:", yourResults);
// });


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
  };

  useEffect(() => {
    const yourResults = document.getElementById('yourResults');
  
    const handleScroll = () => {
      const value = window.scrollY;
      console.log("scroll value:", value);
      // yourResults.style.top = Math.min(value * 1.45 , 100) + 'vh';
      yourResults.style.top =  value * 0.15  + 'vh';
      console.log("scroll value:", yourResults);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <div id="blueMainPanel" className={styles.blueMainPanel}>
            <b className={styles.yourResultsAndContainer}>
              <p id="yourResults" className={styles.yourResults}>Your Results are here!</p>
            </b>
            <Link to="/home">
             <img src="http://localhost:3000/Union.png" alt="Icon Description" className={styles.previousBar}></img>
             <img src="http://localhost:3000/icons8-next-96.png" alt="Icon Description" className={styles.previousIcon}></img>
            </Link>
            {/* BACKGROUND BUILDING GRAPHIC */}
            <svg width = "100%" className={styles.vectorGraphic} xmlns="http://www.w3.org/2000/svg">
              <path d="M2268.96 707.781C1798.42 707.726 1327.91 707.617 857.362 707.562C580.719 707.562 304.077 707.562 27.4341 707.562C22.5558 707.562 17.6391 707.343 12.7608 707.452C4.38699 707.562 0.430566 702.524 0.430566 689.875C0.430566 618.906 -0.0687887 547.992 0.00803515 477.024C0.00803515 454.901 4.31017 450.849 18.6762 457.475C23.0936 459.501 26.8964 460.76 31.1985 457.146C72.837 422.045 108.714 377.252 140.404 325.504C148.547 312.197 148.163 296.372 146.626 274.632C104.527 343.246 58.663 398.553 2.50481 439.623C2.54322 426.426 8.65072 425.002 12.7224 421.552C60.2763 381.633 102.99 333.499 138.176 272.606C141.249 267.295 144.322 261.6 146.165 255.302C149.93 242.543 153.348 236.903 160.762 251.688C164.642 259.409 170.25 257.164 174.859 251.469C177.663 247.964 179.507 240.681 184.116 243.529C189.532 246.869 188.764 255.083 188.764 261.928C188.841 300.862 188.687 339.851 188.687 378.785C188.687 405.234 188.879 431.683 188.687 458.077C188.611 470.343 191.338 476.969 200.902 478.831C225.601 483.705 250.492 487.647 274.384 498.435C283.411 502.487 285.831 496.628 285.754 485.183C285.639 471.274 285.908 457.365 285.985 443.456C285.985 433.435 289.327 427.247 296.471 427.247C304.73 427.247 303.424 436.885 303.539 444.113C303.769 463.608 303.116 483.102 303.808 502.542C304.461 521.215 313.833 528.169 325.511 519.189C335.229 511.687 339.147 520.229 341.989 530.579C344.217 538.519 345.216 547.116 348.558 557.137C347.405 526.746 360.619 520.667 376.675 518.148C381.4 517.437 385.741 512.07 390.465 511.413C403.717 509.551 410.363 500.078 411.284 481.131C412.206 462.677 422.385 450.849 428.762 436.392C432.411 428.178 436.944 429.328 439.44 438.473C441.707 446.851 443.358 455.613 445.394 464.758C448.967 458.953 446.969 452.163 447.276 446.03C447.776 435.68 446.316 423.579 454.498 418.541C463.678 412.9 473.819 413.01 483.076 418.486C489.568 422.319 488.684 432.121 488.953 440.445C489.568 460.322 487.57 480.364 491.642 500.187C495.445 486.114 493.678 471.329 494.101 456.818C494.638 437.542 513.499 411.312 526.674 411.696C536.93 411.97 555.521 437.707 555.905 453.039C556.289 470.398 555.982 487.757 558.94 505.499C561.744 465.798 564.241 426.043 567.352 386.397C574.996 288.815 577.723 190.96 576.11 92.8304C576.072 89.3806 575.572 84.4522 576.878 82.6999C591.552 63.4245 587.134 36.2637 591.628 12.8814C592.627 7.67921 592.32 0.341418 597.313 0.0128603C603.651 -0.370457 602.768 7.89825 603.651 13.7028C607.07 36.8661 604.957 62.1103 618.555 81.4952C621.705 86.0402 620.591 97.485 620.437 105.699C618.094 219.927 623.664 333.499 635.341 446.961C635.341 425.002 635.149 402.989 635.38 381.03C635.61 358.688 639.835 352.774 655.469 352.008C660.847 351.734 666.224 352.008 671.64 352.008C697.3 352.008 699.912 355.512 699.72 392.968C699.527 425.605 698.798 458.187 698.375 490.823C698.298 495.368 697.069 500.516 700.987 504.075C704.598 497.997 702.831 490.823 702.831 484.416C703.023 423.907 702.908 363.343 702.984 302.834C703.023 275.728 709.515 266.254 728.298 265.707C738.592 265.378 748.848 265.488 759.143 265.707C778.003 266.09 782.766 272.661 782.805 299.055C782.92 351.241 782.536 403.427 783.073 455.613C783.189 467.551 778.041 487.483 789.757 488.852C796.441 489.619 792.792 468.646 793.137 457.584C793.982 431.19 796.441 427.74 814.456 427.302C827.862 426.974 832.586 435.297 832.625 453.696C832.663 478.01 834.084 502.268 835.16 526.581C835.544 535.179 838.694 544.762 844.801 536.11C859.436 515.356 878.757 508.949 896.734 499.585C913.635 490.769 924.583 478.174 927.195 452.108C929 434.257 932.15 416.679 934.301 398.882C935.453 389.299 934.762 378.895 944.941 378.511C955.697 378.073 956.618 388.806 957.118 399.32C958.117 420.129 965.607 437.597 970.831 456.215C973.52 465.743 978.168 472.753 986.119 473.026C994.339 473.355 997.796 465.305 1001.25 456.27C1016.89 415.255 1028.45 371.666 1041.16 328.844C1043.74 320.192 1043.43 311.157 1043.89 302.176C1044.51 290.02 1047.08 281.915 1056.37 292.484C1061.41 298.234 1065.75 298.727 1070.55 291.991C1075.2 285.475 1080.65 285.968 1081.11 295.715C1083.22 338.701 1104.58 366.957 1120.6 398.28C1152.25 460.268 1186.94 519.189 1233.22 560.806C1249.7 575.646 1265.3 593.662 1286.54 596.345C1301.6 598.262 1303.29 623.67 1314.89 635.663C1320.19 628.106 1321.38 616.771 1324.18 607.078C1328.91 590.65 1336.67 581.341 1348.96 578.384C1357.14 576.413 1365.05 571.813 1373.27 570.499C1388.18 568.144 1393.9 558.178 1393.67 536.219C1392.71 446.523 1397.66 356.881 1396.09 267.13C1395.82 252.455 1397.2 239.312 1404.39 226.499C1411.65 213.521 1412.41 195.505 1414.1 178.967C1414.53 174.915 1414.83 170.151 1418.56 169.549C1421.48 169.056 1423.13 172.232 1423.4 175.901C1426.74 222.282 1444.6 264.064 1440.76 313.402C1435.35 383.221 1441.72 453.642 1440.92 523.843C1440.49 563.27 1441.57 566.83 1468.38 570.115C1495.19 573.401 1506.41 595.14 1513.59 628.051C1513.59 585.996 1513.9 543.995 1513.4 501.994C1513.25 487.921 1514.86 476.695 1523.19 467.277C1529.72 459.884 1533.99 449.48 1534.1 436.557C1534.14 430.15 1535.14 423.14 1541.02 423.14C1545.63 423.14 1548.09 428.89 1548.28 434.476C1548.93 452.273 1555.65 465.689 1562.6 479.324C1564.53 483.102 1565.79 487.976 1566.45 492.63C1570.21 520.12 1570.36 520.996 1588.11 509.825C1597.75 503.747 1609.24 502.487 1616.61 489.838C1618.65 486.388 1620.15 486.771 1622.6 489.619C1638.35 508.127 1658.21 514.753 1676.42 526.089C1686.33 532.276 1692.94 537.807 1686.87 555.111C1683.06 565.899 1686.98 573.948 1694.05 578.877C1699.31 582.546 1704.65 586.16 1710.15 589.007C1719.36 593.771 1723.63 601.493 1720.79 616.059C1719.67 621.863 1720.09 628.599 1720.82 634.622C1721.9 643.274 1726.66 647.326 1732.46 647.983C1739.15 648.695 1740.34 641.084 1741.18 634.184C1743.91 612.116 1742.26 589.774 1742.87 567.542C1743.41 547.5 1742.87 527.074 1754.63 511.632C1757.66 507.635 1758.85 500.023 1756.89 496.08C1748.75 479.707 1756.89 471.548 1762.62 458.789C1772.45 436.611 1771.53 408.958 1771.68 383.659C1771.8 361.974 1784.09 360.988 1791.54 353.103C1796.49 347.901 1794.57 361.974 1797.72 365.369C1801.33 357.265 1798.3 342.37 1805.68 340.289C1813.7 338.044 1806.67 353.322 1812.28 357.922C1817.93 351.624 1815.2 341.111 1818.01 333.554C1819.39 329.885 1820.5 325.395 1824.31 326.873C1827.19 327.968 1826.46 332.349 1827.38 335.361C1834.56 359.017 1839.71 383.002 1838.1 409.341C1837.63 416.788 1842.78 418.486 1847.12 420.786C1861.56 428.343 1876.55 430.807 1891.8 431.135C1947.61 432.395 2003.34 430.643 2059 424.126C2070.76 422.757 2075.75 412.572 2068.95 397.403C2062.46 382.837 2066.42 376.431 2074.67 372.269C2089.42 364.821 2096.3 352.72 2095.72 329.009C2095.26 310.226 2118.43 293.743 2130.91 303.436C2163.14 328.406 2194.79 354.8 2226.67 380.647C2231.32 384.425 2233.55 390.285 2233.89 397.732C2234.01 400.525 2234.24 403.317 2234.12 406.055C2230.86 491.645 2242.65 576.522 2239.96 662.057C2239.5 677.061 2243.38 684.399 2254.33 683.303C2259.2 682.811 2264.12 683.03 2269 682.975V708L2268.96 707.781ZM2129.68 682.701C2158.07 682.701 2180.58 682.427 2203.08 682.811C2214.11 682.975 2219.37 676.404 2219.1 660.414C2218.8 640.974 2218.53 621.425 2219.1 601.985C2219.99 573.62 2218.91 544.104 2207.96 521.215C2190.52 484.909 2190.6 449.316 2201.13 411.148C2204.2 400.032 2198.25 396.144 2194.17 390.778C2190.79 386.342 2187.8 378.238 2182.07 382.29C2176.89 385.959 2177.96 394.282 2177.89 401.072C2177.73 424.728 2177.89 448.385 2177.77 471.986C2177.66 489.29 2166.13 511.358 2156.26 513.768C2143.97 516.725 2130.03 502.159 2126.38 481.35C2119.16 440.171 2119 399.32 2130.37 359.291C2132.6 351.46 2136.02 341.987 2127.45 338.92C2120.12 336.292 2117.54 345.491 2116.31 354.143C2112.24 383.166 2112.43 412.572 2113.62 441.868C2114.32 458.406 2103.29 498.928 2093.73 502.87C2078.9 508.949 2065.92 502.87 2056.24 484.69C2052.09 476.914 2046.1 473.519 2039.3 475.491C2026.2 479.324 2012.75 475.6 1999.81 478.448C1969.12 485.238 1937.01 477.243 1907.47 496.135C1904.2 498.216 1900.71 497.559 1897.44 495.533C1883.69 487.1 1881.08 498.161 1881.08 514.151C1881.08 553.085 1881.08 592.019 1881.08 631.008C1881.08 654.591 1889.46 666.31 1906.24 666.164C1909.16 666.164 1912.38 665.78 1914.96 667.368C1934.51 679.306 1955.71 677.17 1975.69 677.28C2029 677.608 2082.2 685.658 2129.68 682.592V682.701ZM144.744 330.651C114.322 382.126 81.0572 426.262 42.2611 462.622C74.0278 467.167 104.642 468.591 135.256 470.343C142.439 470.781 144.783 465.853 144.783 456.653C144.744 416.022 144.783 375.335 144.783 330.651H144.744ZM87.1263 507.142C87.1263 507.689 87.1263 508.237 87.1263 508.785C70.5707 508.785 53.9768 508.292 37.4212 508.949C23.9002 509.496 24.7453 523.789 24.6685 537.479C24.5917 551.661 29.3547 558.068 38.9193 557.411C48.6375 556.754 58.3173 555.44 68.0355 554.509C87.011 552.647 106.563 553.633 124.079 561.409C143.054 569.787 144.283 572.141 144.475 543.94C144.475 539.778 144.206 535.562 144.514 531.455C145.896 513.768 141.018 505.937 127.997 506.923C114.399 508.018 100.724 507.142 87.0494 507.142H87.1263ZM207.01 556.206C211.005 554.125 215.499 554.071 217.996 558.561C222.682 567.104 227.829 565.351 233.629 562.613C246.113 556.644 259.058 553.742 272.195 553.249C280.914 552.976 282.144 544.762 283.603 535.507C285.485 523.734 279.839 521.927 274 518.86C252.029 507.416 228.789 508.785 206.088 504.623C200.288 503.528 193.374 501.775 190.646 511.413C187.305 523.186 187.112 536.493 190.8 547.938C193.566 556.535 199.98 559.985 207.01 556.152V556.206ZM956.426 520.558C956.58 534.467 958.539 541.093 971.522 541.64C990.575 542.516 1012.62 526.308 1028.83 555.385C1030.83 558.944 1037.4 562.613 1039.63 553.414C1041.7 544.652 1040.01 536.767 1033.1 533.207C1012.89 522.803 992.726 512.344 972.444 502.323C960.882 496.628 955.735 503.473 956.426 520.503V520.558Z" fill="url(#paint0_linear_335_116)"/>
              <defs>
                <linearGradient id="paint0_linear_335_116"  x1="0%" y1="0%" x2="100%" y2="100%"  gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#003559" stop-opacity="100%"/>
                  <stop offset="60%" stop-color="#9AD5FD" stop-opacity="90%"/>
                  <stop offset="100%" stop-color="white" stop-opacity="75%"/>
                </linearGradient>003559
              </defs>
            </svg>
          </div>
        )}

        {/* Conditionally rendered Expand/Exit button */}
        <button onClick={toggleExpand} className={styles.toggleButton}>
            {isExpanded ?
              <img src="http://localhost:3000/backExpandButton.png" alt="Icon Description" className = {styles.toggleOff}></img> 
              : 
              <img src="http://localhost:3000/learnMore.png" alt="Icon Description" className = {styles.toggleOn}></img>
              }
        </button>
        {/* Right Section - Detected Symptoms */}
        {!isExpanded && (  
          
          <div className={`${styles.detectedSymptomsMainPanel} ${isExpanded ? styles.expandedPanel : ''}`}>
            <DetectedSymtomsBars percentage={60} color={"aqua"} category={"Anxiety"} />
            <DetectedSymtomsBars percentage={45} color={"orange"} category={"Quality of Life"}/>
            <DetectedSymtomsBars percentage={80} color={"gold"} category={"PTSD"}/>
            <DetectedSymtomsBars percentage={100} color={"#d8bfd8"} category={"Cultural Sensitivity"}/>
            <DetectedSymtomsBars percentage={55} color={"lightgreen"} category={"Stress"}/>
            <DetectedSymtomsBars percentage={80} color={"pink"} category={"Self-Esteem"}/>
            <DetectedSymtomsBars percentage={100} color={"red"} category={"Depression"}/>
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
      <a href="https://www.example.com">
        <img src="http://localhost:3000/icons8-next-96.png" alt="Icon Description" className={styles.back_button}></img>
      </a>
      <div className={styles.footerBar} />
    </div>
  );
};

export default Analytics;
