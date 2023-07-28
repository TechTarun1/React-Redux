import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, CartItem } from "../../types/StoreType";

export const addToCart = (product: CartItem) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product: CartItem) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
