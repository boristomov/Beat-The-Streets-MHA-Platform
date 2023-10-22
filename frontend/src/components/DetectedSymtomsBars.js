import styles from "./DetectedSymtomsBars.module.css";

const DetectedSymtomsBars = () => {
  return (
    <div className={styles.depressionParent}>
      <div className={styles.depression}>Depression</div>
      <div className={styles.anxiety}>Anxiety</div>
      <div className={styles.stress}>Stress</div>
      <div className={styles.culturalSensitivity}>Cultural Sensitivity</div>
      <div className={styles.selfEsteem}>Self-Esteem</div>
      <div className={styles.qualityOfLife}>Quality of Life</div>
      <div className={styles.ptsd}>PTSD</div>
      <div className={styles.frameChild} />
    </div>
  );
};

export default DetectedSymtomsBars;
