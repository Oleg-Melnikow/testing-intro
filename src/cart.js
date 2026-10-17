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
      return cartItem;
    });
  }

  return [...cart, { ...product, quantity: newQuantity }];
}

function changeQuantity(cart, productiId, quantity) {
  if (quantity < 1) {
    throw new RangeError("Количество товара должно быть больше 0");
  }

  return cart.map((product) => {
    if (product.id === productiId) {
      if (product.stock < quantity) {
        throw new RangeError(
          "Количество товара не должно быть больше, чем есть на складе",
        );
      }
      return { ...product, quantity };
    }
    return product;
  });
}

function removeFromCart(cart, productiId) {
  return cart.reduce((updatedCart, product) => {
    if (product.id !== productiId) {
      return [...updatedCart, product];
    }
    return updatedCart;
  }, []);
}

function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
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
