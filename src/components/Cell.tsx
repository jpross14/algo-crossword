// Handles single cell input, either letter || black square.
import { Cell } from "@/types/types";

type Props = {
    cell: Cell;
};

export default function CellComponent({ cell }: Props) {
   return (
      cell.isBlack ? (
         <div className="w-10 h-10 bg-black border border-gray-500"></div>
      ) : (
         <div className="w-10 h-10 border border-gray-500 relative">
            {cell.number && <span className="absolute text-xs top-0 left-0">{cell.number}</span>}
            <input type="text"
            className="w-full h-full text-center text-xl focus:outline-none"
            maxLength={1}
            value={cell.value}
            onChange={() => {}}
            />
         </div>
      )
   );
};