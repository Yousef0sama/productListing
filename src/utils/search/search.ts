// imports

// interfaces

import { ProductI } from "@/interfaces/interfaces";

export default function search(products: ProductI[], str: string): ProductI[] {
  return products.filter(product =>
    product.name.toLowerCase().includes(str.toLowerCase()) ||
    product.category.toLowerCase().includes(str.toLowerCase())
  );
}