import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import "./App.css";

export function Carousel({ children: slides }) {
  const [curr, setCurr] = useState();
  return (
    <div className="mt-20">
      {/* <div className="buttons absolute inset-0 flex items-center justify-between p-4">
        <button className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft size={40} />
        </button>
        <button className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight size={40} />
        </button>
      </div> */}
      <div className="images flex flex-row justify-center">{slides}</div>
    </div>
  );
}
