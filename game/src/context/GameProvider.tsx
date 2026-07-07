// Pathing of this specific file
// _____________________________
// src/context/GameProvider.tsx

import { useState, type ReactNode } from "react";
import { GameContext } from "./GameContext";

import type {
    BoardSize,
    Difficulty,
    MenuStep,
} from "../types/game";

type GameProviderProps = {
    children: ReactNode;
};

export function GameProvider({ children }: GameProviderProps) {

    // Step
    const [step, setStep] = useState<MenuStep>("size");

    // Board Size
    const [boardSize, setBoardSize] =
        useState<BoardSize | null>(null);

    // Difficulty
    const [difficulty, setDifficulty] =
        useState<Difficulty | null>(null);

    return (
        <GameContext.Provider
            
            value={{

                step,
                setStep,

                boardSize,
                setBoardSize,

                difficulty,
                setDifficulty,

            }}
        >

            {children}

        </GameContext.Provider>

    );
}