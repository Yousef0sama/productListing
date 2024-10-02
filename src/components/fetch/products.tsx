// imports

// context

import { ProductContext, ProductContextType } from "@/context/productContext";

// hooks

import { useContext, useEffect, useState } from "react";

// components

import Product from "../product";
import LoadingSkeleton from "../loadingSkeleton";
import FilterSection from "../filterSection";
import Pagination from "../pagination";

// utils

import search from "@/utils/search/search";

// interfaces

import { ProductI } from "@/interfaces/interfaces";

export default function Products() {

  const { products }: ProductContextType = useContext(ProductContext)!;

  const [load, setLoad] = useState(true);
  const [arr, setArr] = useState<ProductI[]>([]);
  const [searchString, setSearchString] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOption, setSortOption] = useState("Name A-Z");
  const [curr, setCurr] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(arr.length / itemsPerPage);

  useEffect(() => {
    if (products) {
      setLoad(false);
    } else {
      setLoad(true);
    }
  }, [products]);

  useEffect(() => {
    let serachedArray = search([...products], searchString);

    if (categoryFilter) {
      serachedArray = serachedArray.filter(product => product.category === categoryFilter);
    }

    switch (sortOption) {
      case "Name A-Z":
        serachedArray.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Name Z-A":
        serachedArray.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Price Low-High":
        serachedArray.sort((a, b) => a.price - b.price);
        break;
      case "Price High-Low":
        serachedArray.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setArr(serachedArray)
    setCurr(1)
  }, [searchString, categoryFilter, sortOption, products]);

  const currItems = arr.slice((curr - 1) * itemsPerPage, curr * itemsPerPage);

  return (
    <>
      {load ? <LoadingSkeleton /> : (
        <>
          <FilterSection
            SearchString={searchString}
            setSearchString={setSearchString}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5">
            {currItems.map(({ id, name, category, price, description }) => (
              <div key={id} className="bg-white w-full px-5 py-3 pb-5 my-5 rounded-lg border-[1px] border-solid border-gray-300">
                <Product product={{ id, name, category, price, description }} />
              </div>
            ))}
          </div>

          {currItems.length > 0 && <Pagination totalPages={totalPages} curr={curr} setCurr={setCurr} />}
        </>

      )}
    </>
  );
}
