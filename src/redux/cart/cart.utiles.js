export const addItemToCart = (cartItems, cartItemToAdd) => {
  console.log("aa", cartItems);
  console.log("ss", cartItemToAdd);

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemRemovedFromCart) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemRemovedFromCart.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== itemRemovedFromCart.id
    );
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemRemovedFromCart.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
