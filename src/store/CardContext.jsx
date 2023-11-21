import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

function cartValuesReducerFn(state, action) {
  const updatedItem = [...state.items];

  if (action.type === "ADD_ITEM") {
    // 1st check item
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.items.id;
    });
    // if item already added to cart, do this below
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      // only add quantity 1 to existing item in new object
      const updatedItemAdd = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      // update item that already on the cart
      updatedItem[existingCartItemIndex] = updatedItemAdd;
    }
    // if an item is the first time added to cart, do this below
    else {
      updatedItem.push({ ...action.items, quantity: 1 });
    }
    return { ...state, items: updatedItem };
  }

  if (action.type === "REMOVE_ITEM") {
    // remove item
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const itemToDecrease = updatedItem[existingCartItemIndex];
    if (itemToDecrease) {
      if (itemToDecrease.quantity === 1) {
        // remove item from cart
        const updatedItems = state.items.filter((item) => {
          return item.id !== action.id;
        });
        return { ...state, items: updatedItems };
      }
      if (itemToDecrease.quantity > 1) {
        // decrease quantity
        const decreaseQuantity = {
          ...itemToDecrease,
          quantity: itemToDecrease.quantity - 1,
        };
        updatedItem[existingCartItemIndex] = decreaseQuantity;
        return { ...state, items: updatedItem };
      }
    }
  }
  return state;
}

export const CartContextProvider = ({ children }) => {
  const [cartValues, dispatchCartValues] = useReducer(cartValuesReducerFn, {
    items: [],
  });

  const addItem = (items) => {
    // console.log(item);
    dispatchCartValues({ type: "ADD_ITEM", items });
  };
  const removeItem = (id) => {
    dispatchCartValues({ type: "REMOVE_ITEM", id: id });
  };

  const cartContextValues = {
    items: cartValues.items,
    addItem,
    removeItem,
  };

  // console.log({ fromContext: cartContextValues.items });

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
