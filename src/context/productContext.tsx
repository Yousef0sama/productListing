// imports

// hooks

import { createContext, useState, useEffect } from 'react';

// interfaces

import { ProductI } from '@/interfaces/interfaces';
import { ReactNode } from 'react';

export interface ProductContextType {
  products: ProductI[];
  setProducts: (products: ProductI[]) => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {

  const [products, setProducts] = useState<ProductI[]>(() => {
    if (typeof window !== 'undefined') {
      const storedProducts = localStorage.getItem('products');
      return storedProducts ? JSON.parse(storedProducts) : [];
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);


  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};