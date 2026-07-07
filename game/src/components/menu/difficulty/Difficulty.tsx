// Pathing of this specific file
// _____________________________
// src/components/menu/difficulty/Difficulty.tsx

import { useGame } from "@hooks/useGame";

function Difficulty() {

    const {setDifficulty, setStep} = useGame();

    return (
        <section>

            <h2>Choose Difficulty</h2>

            <button
                onClick={() => {
                    setDifficulty("easy");
                    setStep("start");
                }}
                >
                Easy
            </button>

            <button
                onClick={() => {
                    setDifficulty("medium");
                    setStep("start");
                }}
                >
                Medium
            </button>

            <button
                onClick={() => {
                    setDifficulty("hard");
                    setStep("start");
                }}
                >
                Hard
            </button>

        </section>
    );
}

export default Difficulty;