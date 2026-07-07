// Pathing of this specific file
// _____________________________
// src/components/return/Return.tsx

import styles from "./Return.module.css";

function Return() {
    return (
        <div className={styles.returnWrapper}>
            <img 
                src="/images/return/logo.ico" 
                className={styles.returnImage} 
            />
        </div>
    );
}

export default Return;