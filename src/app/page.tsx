import CrosswordGrid from "@/components/CrosswordGrid";
import ClueList from "@/components/CluesList";
import puzzleData from '@/data/puzzle.json';
import { Clue } from "@/types/types";

const typedClues = puzzleData.clues as Clue[];

export default function Home() {
   return (
     <main>
      <CrosswordGrid grid={puzzleData.grid}/>
      <ClueList clues={typedClues}/>
     </main>
   );
}
