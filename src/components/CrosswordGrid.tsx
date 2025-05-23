"use client";

// Renders the entire crosswordgrid. Handles focus, input, and navigation.
import { Cell } from "@/types/types";
import CellComponent from "./Cell";

type Props = {
   grid: Cell[][];
};

export default function CrosswordGrid({ grid }: Props) {
   return (
      <div className="grid" style={{ gridTemplateColumns: `repeat(${grid[0].length}, 40px)`}}>
         {grid.flat().map((cell, idx) => (
            <CellComponent key={idx} cell={cell}/>
         ))}
      </div>
   );
};