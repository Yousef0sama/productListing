// imports

// context

import { ProductContext, ProductContextType } from "@/context/productContext"

// hooks

import { useContext, useState } from "react";

// components

import Input from "./ui/input";
import Select from "./ui/select";

// svgs

import Close from "@/assets/svgs/close";

// constants

import { categories } from "@/constants/constants";

// interfaces

import { ProductI, setState } from "@/interfaces/interfaces";

export default function Form( {setIsClicked} : {setIsClicked : setState<boolean>} ) {

  const {products, setProducts} : ProductContextType = useContext(ProductContext)!;

  const [product, setProduct] = useState<ProductI>({
    id : 0,
    name: "",
    category: "",
    price : 0,
    description : "",
  })

  const [errs, setErrs] = useState({
    name : "",
    category: "",
    price : "",
    description : ""
  })

  const handleAdding = () => {
    console.log(product)
    let tempErrs = { ...errs };

    if (product.name.length === 0) {
      tempErrs.name = "this field is required";
    } else {
      tempErrs.name = "";
    }

    if (product.category.length === 0) {
      tempErrs.category = "this field is required";
    } else {
      tempErrs.category = "";
    }

    if (product.price === 0) {
      tempErrs.price = "this field is required";
    } else {
      tempErrs.price = "";
    }

    if (product.description.length === 0) {
      tempErrs.description = "this field is required";
    } else {
      tempErrs.description = "";
    }

    setErrs(tempErrs);


    if (
      tempErrs.name === "" &&
      tempErrs.category === "" &&
      tempErrs.price === "" &&
      tempErrs.description === ""
    ) {
      const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;

      const newProduct = {
        id: newId,
        name: product.name,
        category: product.category,
        price: Number(product.price),
        description: product.description,
      };

      setProducts([...products, newProduct]);

      setProduct({
        id: 0,
        name: "",
        category: "",
        price: 0,
        description: "",
      });
    }
  };


    return (
      <div className="bg-white w-fit rounded-lg px-10 py-5 min-w-[70vw] max-w-[70vw] z-50">
        <button type="button" className="float-right my-2" onClick={() => setIsClicked(false)}><Close /><span className="hidden">.</span> </button>
        <br />
        <h1 className="text-2xl font-bold">Sell an item</h1>
        <br />
        <form>
          <Input type="text" text="Title" id="name" product={product} err={errs.name} setProduct={setProduct}/>
          <Input type="text" text="Describe your item" id="description" product={product} err={errs.description} setProduct={setProduct}/>
          <span className="block py-2">Category</span>
          <Select options={categories} text="Select" selectedOption={product.category} onSelect={(value) => setProduct(prev => ({ ...prev, category: value }))} />
          <span className="block py-2 text-red-600">{errs.category}</span>
          <Input type="text" text="Price" id="price" product={product} err={errs.price} setProduct={setProduct}/>
          <div className="element-center mt-4">
            <button type="button" className="bg-main text-black hover:bg-second text-center w-full py-3 rounded-[4px]" onClick={handleAdding}>Upload item</button>
          </div>
        </form>
      </div>
    )

}