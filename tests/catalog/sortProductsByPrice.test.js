const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

describe("sortProductsByPrice", () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products, "asc");
    expect(result.map(({ id }) => id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products);
    expect(result.map(({ id }) => id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const currentProducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    const result = sortProductsByPrice(currentProducts, "asc");
    expect(result.map(({ id }) => id)).toEqual([3, 4, 1]);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const result = sortProductsByPrice(products, "desc");
    expect(result.map(({ id }) => id)).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const currentProducts = products.filter(({ id }) => [3, 1, 4].includes(id));
    const result = sortProductsByPrice(currentProducts, "desc");
    expect(result.map(({ id }) => id)).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const currentProducts = products.filter(({ id }) => [5, 2, 6].includes(id));
    const result = sortProductsByPrice(currentProducts, "desc");
    expect(result.map(({ id }) => id)).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const testProducts = [products[0], products[2], products[3]];
    const originalSnapshot = JSON.parse(JSON.stringify(testProducts));
    sortProductsByPrice(testProducts, "asc");
    expect(testProducts).toEqual(originalSnapshot);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const testProducts = [products[0], products[2], products[3]];
    const originalSnapshot = JSON.parse(JSON.stringify(testProducts));
    sortProductsByPrice(testProducts, "desc");
    expect(testProducts).toEqual(originalSnapshot);
  });

  test("направление по умолчанию не меняет исходный массив всех товаров", () => {
    const testProducts = [...products];
    const originalSnapshot = JSON.parse(JSON.stringify(testProducts));
    sortProductsByPrice(testProducts);
    expect(testProducts).toEqual(originalSnapshot);
  });
});
