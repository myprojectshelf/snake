// Pathing of this specific file
// _____________________________
// src/context/GameContext.tsx

import {
    createContext,
    type Dispatch,
    type SetStateAction,
} from "react";

import type {
    BoardSize,
    Difficulty,
    MenuStep,
} from "../types/game";

type Setter<T> = Dispatch<SetStateAction<T>>;

export interface GameContextType {
    
    // Steps
    step: MenuStep;
    setStep: Setter<MenuStep>;

    // Size
    boardSize: BoardSize | null;
    setBoardSize: Setter<BoardSize | null>;

    // Difficulty
    difficulty: Difficulty | null;
    setDifficulty: Setter<Difficulty | null>;
}

export const GameContext = createContext<GameContextType | null>(null);