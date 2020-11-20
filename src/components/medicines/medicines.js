import React from 'react';
import styles from './medicines.module.css';

import MedicineDisplay from '../medicine_display/medicine_display';

const Medicines = ({ medicines }) => {
    // ternary operator for syntactic nicities
    const medicineSyntax = medicines.length === 1 ? "have 1 medicine!" : medicines.length === 0 ? "don't have any medicines!" : `have ${medicines.length} medicines!`;
    return (<div className={styles.root}>
        <h1 className={styles.medCount}>Looks like you {medicineSyntax}</h1>

        {/* list of medicines iterates through all the medicines that were passed through, returns a MedicineDisplay component
        for each medicine */}
        <div id='Medicine-List'>
            {medicines.map((value, index) => {
                return (
                    <MedicineDisplay key={index} name={value.name} company={value.company} />
                );
            })}
        </div>
    </div>);
}

export default Medicines;