// Renders Across and Down clues, clickable to jump focus.
import { Clue } from "@/types/types";

type Props = {
   clues: Clue[];
};

export default function CluesList({ clues }: Props) {
   return (
      <div className="overflow-y-auto max-h-screen">
         <h2 className="font-bold">Across</h2>
         <ul>
         {clues.filter(c => c.direction === "across").map(c => (
            <li key={c.number}><strong>{c.number}.</strong> {c.clue}</li>
         ))}
         </ul>
         <h2 className="font-bold mt-4">Down</h2>
         <ul>
         {clues.filter(c => c.direction === "down").map(c => (
            <li key={c.number}><strong>{c.number}.</strong> {c.clue}</li>
         ))}
         </ul>
      </div>
   );
}