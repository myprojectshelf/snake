// Pathing of this specific file
// _____________________________
// src/components/menu/size/Size.tsx

import { useGame } from "@hooks/useGame";

function Size() {

    const {setBoardSize, setStep}= useGame();

    return (
        <section>

        <h2>Choose Board Size</h2>

        <button
            onClick={() => {
            setBoardSize("small");
            setStep("difficulty");
            }}
        >
            Small
        </button>

        <button
            onClick={() => {
            setBoardSize("medium");
            setStep("difficulty");
            }}
        >
            Medium
        </button>

        <button
            onClick={() => {
            setBoardSize("large");
            setStep("difficulty");
            }}
        >
            Large
        </button>

        </section>
    );
}

export default Size;