const products = require("../../src/data/products");
const { searchProducts } = require("../../src/catalog");

describe("searchProducts", () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const [product] = searchProducts(products, "Наушники");
    expect(product?.id).toBe(1);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const [product] = searchProducts(products, "Чистый код");
    expect(product?.id).toBe(6);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const [product] = searchProducts(products, "Настольная лампа");
    expect(product?.id).toBe(4);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const [product] = searchProducts(products, "javascript");
    expect(product?.id).toBe(3);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const [product] = searchProducts(products, "ЧЕХОЛ");
    expect(product?.id).toBe(5);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const [product] = searchProducts(products, "наушники");
    expect(product?.id).toBe(1);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const allProducts = searchProducts(products, "");
    expect(allProducts.map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const allProducts = searchProducts(products, "  ");
    expect(allProducts.map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const allProducts = searchProducts(products, "\t\n");
    expect(allProducts.map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
