// Pathing of this specific file
// _____________________________
// src/types/game.ts

export type BoardSize =
    | "small"
    | "medium"
    | "large";

export type Difficulty =
    | "easy"
    | "medium"
    | "hard";

export type MenuStep =
    | "size"
    | "difficulty"
    | "start"
    | "playing"
    | "gameOver";