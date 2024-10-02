// imports

// interfaces

import { ProductI } from "@/interfaces/interfaces";

export default function Product({product} : {product : ProductI}) {


  return (
    <>
      <div className="md:h-[40px] h-[60px]">
        <strong>name : </strong>
        <span className="text-purple font-bold">{product.name}</span>
      </div>
      <br />
      <div className="md:h-[40px] h-[60px]">
        <strong>category : </strong>
        <span className="text-darkPurple font-bold">{product.category}</span>
      </div>
      <br />
      <div className="md:h-[100px] h-[150px]">
        <strong>description : </strong>
        <span className="text-sm">{product.description}</span>
      </div>
      <br />
      <div className="md:mt-[-10px]">
        <strong>price : </strong>
        <span className="text-darkPurple font-bold">{product.price}</span>
      </div>
    </>
  )

}