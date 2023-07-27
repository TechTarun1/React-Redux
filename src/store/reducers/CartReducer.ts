// src/store/reducers/cartReducer.js

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find((item: any) => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item: any) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case 'REMOVE_FROM_CART':
      const productExist: any = state.items.find((item: any) => item.id === action.payload.id);
      if (productExist && productExist.quantity === 1) {
        return {
          ...state,
          items: state.items.filter((item: any) => item.id !== action.payload),
        }
      }
      else {
        return {
          ...state,
          items: state.items.map((item: any) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
          ),
        };
      }
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
