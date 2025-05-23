export type Direction = "across" | "down";

export interface Clue {
   number: number;
   clue: string;
   answer: string;
   row: number;
   col: number;
   direction: Direction;
}

export interface Cell {
   row: number;
   col: number;
   isBlack: boolean;
   value: string;
   number?: number;
}