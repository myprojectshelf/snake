// Pathing of this specific file
// _____________________________
// src/components/back/Back.tsx

import styles from "./Back.module.css";
import { useGame } from "../../hooks/useGame";

function Back() {

    const { setStep } = useGame();

    return (
        <div
            className={styles.backWrapper}
            onClick={() => setStep("size")}
        >
            <i className="fa fa-arrow-left" />
        </div>
    );
}

export default Back;