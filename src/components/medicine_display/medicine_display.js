import React from 'react';
import styles from './medicine_display.module.css';

const MedicineDisplay = ({ name, company }) => {
  return (<div className={styles.container}>
    <h2 className={styles.name}>{name}</h2>
    <h2 className={styles.company}>{company}</h2>
  </div>)
}

export default MedicineDisplay;