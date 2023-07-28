export type CartItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export type AddToCartAction = {
    type: typeof ADD_TO_CART;
    payload: CartItem;
}

export type RemoveFromCartAction = {
    type: typeof REMOVE_FROM_CART;
    payload: CartItem;
}

export type ClearCartAction = {
    type: typeof CLEAR_CART;
}

export type CartActionTypes = AddToCartAction | RemoveFromCartAction | ClearCartAction;