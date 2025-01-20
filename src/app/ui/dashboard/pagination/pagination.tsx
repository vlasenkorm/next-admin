import React from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

export default function Pagination() {
  return (
    <div className="flex justify-between">
      <button className="flex bg-zinc-400 px-2 py-1">
        <MdArrowBack size={25} />
        prev
      </button>
    -oooo-
      <button className="flex bg-zinc-200 px-2 py-1">
        next <MdArrowForward size={25} />
      </button>
    </div>
  );
}
