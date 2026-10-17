function addToCart(cart, product, quantity) {
  if (quantity < 1) {
    throw new RangeError("Количество товара должно быть больше 0");
  }

  const includeProduct = cart.find(({ id }) => id === product.id);
  const currentQuantity = includeProduct ? includeProduct.quantity : 0;
  let newQuantity = currentQuantity + quantity;

  if (product.stock < newQuantity) {
    throw new RangeError(
      "Количество добавленого товара не должно быть больше, чем есть на складе",
    );
  }

  if (includeProduct) {
    return cart.map((cartItem) => {
      if (cartItem.id === product.id) {
        return { ...cartItem, quantity: newQuantity };
      }
    });
  }

  return [...cart, { ...product, quantity: newQuantity }];
}

function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function changeQuantity() {
  return notImplemented();
}
function removeFromCart() {
  return notImplemented();
}
function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
