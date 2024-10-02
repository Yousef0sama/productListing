// imports

// components

import Search from "./search";
import Form from "./form";
import Select from "./ui/select";

// svgs

import PlusIcon from "@/assets/svgs/plusIcon";

// hooks

import { useState } from "react";

// constants

import { categories, sortItems } from "@/constants/constants";

// interfaces

interface Filter{
  SearchString: string,
  setSearchString: (val : string) => void,
  categoryFilter: string,
  setCategoryFilter: (val : string) => void,
  sortOption : string,
  setSortOption: (val : string) => void,
}

export default function FilterSection (
  {
    SearchString,
    setSearchString,
    categoryFilter,
    setCategoryFilter,
    sortOption,
    setSortOption,
  } : Filter
) {

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-5 px-5 space-y-4 lg:space-y-0">
      <div className="w-full lg:w-auto">
        <Search setSearchString={(setSearchString)} searchString={SearchString} />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 w-full lg:w-auto">
        <div className="sm:w-[200px] w-full">
          <Select options={categories} text="All Categories" selectedOption={categoryFilter} onSelect={(value) => setCategoryFilter(value)} />
        </div>

        <div className="sm:w-[290px] w-full flex items-center space-x-2">
          <span className="block w-[90px]"> sort by </span>
          <Select options={sortItems} selectedOption={sortOption} onSelect={(value) => setSortOption(value)} />
        </div>
      </div>

      <div className="w-full lg:w-fit">
        <button type="button" className="bg-main hover:bg-second rounded-[4px] py-[11px] px-[32px] flex items-center space-x-2" onClick={() => setIsClicked(true)}>
          <span className="inline"><PlusIcon /></span>
          <span>Sell item</span>
        </button>
      </div>

      {
        isClicked &&
        <div className="absolute h-full w-full md:left-[-16px] md:top-0 left-0 top-[-8px]">
          <div className="element-center h-full w-full bg-[rgba(0,0,0,0.3)]">
            <Form setIsClicked={setIsClicked} />
          </div>
        </div>
      }
    </div>
  );
}
