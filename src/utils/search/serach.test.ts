// imports
import { ProductI } from "@/interfaces/interfaces";
import search from "./search";

const products: ProductI[] = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000, description: "A high-performance laptop" },
  { id: 2, name: "Smartphone", category: "Electronics", price: 500, description: "A latest model smartphone" },
  { id: 3, name: "Coffee Maker", category: "Kitchen", price: 150, description: "Brews excellent coffee" },
  { id: 4, name: "Mixer", category: "Kitchen", price: 80, description: "Mixes ingredients well" }
];

describe.skip("search function", () => {
  test("returns products matching the name", () => {
    const result = search(products, "Laptop");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Laptop");
  });

  test("returns products matching the category", () => {
    const result = search(products, "Kitchen");
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe("Coffee Maker");
    expect(result[1].name).toBe("Mixer");
  });

  test("returns products matching both name and category", () => {
    const result = search(products, "Electronics");
    expect(result).toHaveLength(2);
  });

  test("returns an empty array when no match is found", () => {
    const result = search(products, "Nonexistent");
    expect(result).toHaveLength(0);
  });

  test("returns products case-insensitively", () => {
    const result = search(products, "laptop");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Laptop");
  });

  test("returns products when search term is a part of the name or category", () => {
    const result = search(products, "mix");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Mixer");
  });
});
