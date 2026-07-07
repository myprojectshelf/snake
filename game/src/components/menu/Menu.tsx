// Pathing of this specific file
// _____________________________
// src/components/menu/Menu.tsx

import { useState } from "react";

import styles from "./Menu.module.css";
import Size from "./size/Size";
import Difficulty from "./difficulty/Difficulty";
import Back from "@components/back/Back";
import { useGame } from "@hooks/useGame";

function Menu() {

  const { step } = useGame();

  return (
    <main className={styles.gameWrapper}>

        {/* Content Wrapper (Box, Border etc.) */}
        <div className={styles.gameContent}>

          {/* Back Button */}
          {step === "difficulty" && <Back />}

          <div className={styles.gameMetaInfo}>

            {/* Title */}
            <h1>snake</h1>

            {/* Settings Wrapper */}
            <div className={styles.gameSettings}>

              {/* Controlled Component */}
              {step === "size" && <Size />}
              {step === "difficulty" && <Difficulty />}

            </div>

            {/* Author */}
            <p>Game created by Guacamoleboy</p>

          </div>
      
        </div>

    </main>
  );
}

export default Menu;