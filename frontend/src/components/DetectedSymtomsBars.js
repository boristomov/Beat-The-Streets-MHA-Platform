import React from 'react';
import styles from "./DetectedSymtomsBars.module.css";



const DetectedSymtomsBars = ({color, percentage, category}) => {
  const scaled_percentage = percentage * 0.80;
  const percentageValue = `${scaled_percentage}%`; 

  return (
    <div className={styles.SymptomBar}>
      <p className={styles.categoryText}>
        {category}
      </p>
      <div style={{width: percentageValue, backgroundColor: color}} className={styles.coloredBar}>
        <div className={styles.circle}>
        </div>
        {/* <p className={styles.categoryText}>
          {category}
        </p> */}
      </div>
      <p className={styles.criteriaText}>
        {percentage}%
      </p>
    </div>
  );
};

export default DetectedSymtomsBars;
