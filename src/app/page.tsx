"use client"

// imports

// context

import { ProductProvider } from "@/context/productContext"

// components

import Products from "@/components/fetch/products"

export default function App() {


  return (
    <ProductProvider>
      <div>
        <Products />
      </div>
    </ProductProvider>
  )

}
