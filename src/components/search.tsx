// imports

// hooks

import { useState } from "react"

// svgs

import SearchIcon from "@/assets/svgs/search";

// interfaces

import { setState } from "@/interfaces/interfaces";

interface SearchI {
  searchString : string;
  setSearchString : setState<string>
}

export default function Search({ searchString, setSearchString } : SearchI) {

  return (
    <div>
      <form action="">
        <label htmlFor="search" className="hidden">.</label>
        <div className="relative">
          <input
            type="text"
            id="search"
            name="search"
            value={searchString}
            placeholder="Search By Name Or Category"
            className="outline-none border-[1px] border-solid border-gray-300 lg:w-[300px] xl:w-[500px] 2xl:w-[700px] w-full px-[13px] py-[11px] rounded-[4px] mt-2"
            onChange={(e) => setSearchString(e.target.value)}
          />
          <span className="absolute right-[13px] top-[22px]"><SearchIcon /> </span>
        </div>
      </form>
    </div>

  )
}