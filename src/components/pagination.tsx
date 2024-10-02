// imports

// components

import Paginat from "./ui/pagint";

// svgs

import Next from "@/assets/svgs/next";
import Prev from "@/assets/svgs/prev";

// interfaces

import { setState } from "@/interfaces/interfaces";

interface PaginationI {
  totalPages: number;
  curr: number;
  setCurr: setState<number>;
}

export default function Pagination({ totalPages, curr, setCurr }: PaginationI) {

  const nextPage = () => {
    if (curr < totalPages) setCurr(curr + 1);
  };

  const prevPage = () => {
    if (curr > 1) setCurr(curr - 1);
  };

  const renderThree = (val : number) => {
    return (
      <>
        <Paginat val={val} curr={curr} setCurr={setCurr} />
      </>
    )
  }

  return (
    <div className="relative flex flex-col justify-center items-center my-4 w-full">
      <div className="flex justify-center items-center w-full">
        <button
          type="button"
          className="absolute left-0 px-4 py-2 mx-1 text-black hidden md:flex md:items-center md:space-x-2"
          disabled={curr === 1}
          onClick={prevPage}
        >
          <Prev />
          <span className="mt-[-3px]">Previous</span>
        </button>

        {
          totalPages > 6 ? (
            <>
              {curr > 3 && curr < totalPages - 2 ? renderThree(curr) : renderThree(3)}
              {totalPages > 6 && <span>...</span>}
              {renderThree(totalPages)}
            </>
          ) : (
            <>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <Paginat val={idx+1} curr={curr} setCurr={setCurr} key={idx+1} />
              ))}
            </>
          )
        }

        <button
          type="button"
          className="absolute right-0 px-4 py-2 mx-1 text-black hidden md:flex md:items-center md:space-x-2"
          disabled={curr === totalPages}
          onClick={nextPage}
        >
          <span className="mt-[-3px]">Next</span>
          <Next />
        </button>
      </div>

      <div className="relative w-full mt-4">
        <div className="flex justify-between items-center md:hidden px-5">
          <button
            type="button"
            className="absolute left-0 px-4 py-2 text-black flex items-center space-x-2"
            disabled={curr === 1}
            onClick={prevPage}
          >
            <Prev />
            <span className="mt-[-3px]">Previous</span>
          </button>
          <button
            type="button"
            className="absolute right-0 px-4 py-2 text-black flex items-center space-x-2"
            disabled={curr === totalPages}
            onClick={nextPage}
          >
            <span className="mt-[-3px]">Next</span>
            <Next />
          </button>
        </div>
      </div>
    </div>
  );
}
