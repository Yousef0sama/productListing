// imports

// interfaces

import { ProductI, setState } from "@/interfaces/interfaces";

interface InputI {
  type : string,
  text : string,
  id : string,
  err? : string,
  product : ProductI,
  setProduct : setState<any>
}


export default function Input ({ type, text, id, err, product, setProduct } : InputI) {

    const readData = (e: any) => {
      const { value } = e.target;
      switch (id) {
        case "name":
        case "category":
        case "description":
          setProduct((prev : any) => ({ ...prev, [id]: value }));
          break;
        case "price":
          const priceRegex = /^\d*\.?\d{0,2}$/;
          if (priceRegex.test(value)) {
            setProduct((prev : any) => ({ ...prev, price: value }));
          }
          break;
        default:
          break;
      }
    };

    const value = () => {
      if (product) {
        switch (id) {
          case "name" :
            return product.name
          case "price" :
            return product.price
          case "description" :
            return product.description
        }
      }
    }

  return (
    <>
      <label htmlFor={id} className="block py-2">
        {text}
      </label>
      {
        id !== "description" ?
        (
          id !== "price" ?
          (
            <input type={type} id={id} value={value()} className="bg-white rounded-[4px] px-5 py-2 outline-none w-full border-[1px] border-solid border-gray-300" onChange={(e) => readData(e)}/>
          )
          :
          (
            <div className="relative">
              <span className="text-2xl absolute ml-5 mt-1">£</span>
              <input type={type} id={id} value={value() === 0 ? "" : value()} placeholder="00.00" className="bg-white rounded-[4px] px-5 pl-11 py-2 outline-none w-full border-[1px] border-solid border-gray-300 placeholder:text-right" onChange={(e) => readData(e)}/>
            </div>
          )
        )
        :
        (<textarea id={id} value={value()} className="bg-white rounded-[4px] px-5 py-2 outline-none w-full resize-none h-44 border-[1px] border-solid border-gray-300"onChange={(e) => readData(e)}></textarea>)
      }
      {err && <span className="text-red-600 block px-2">{err}</span>}
    </>
  )
}