import { createContext, useReducer } from "react";

const CartContext = createContext({
  item: [],
  addItem: () => {},
  removeItem: () => {},
});

function cartValuesReducerFn(state, action) {
  if (action === "ADD_ITEM") {
    // ADD ITEM
    // 1st check item
    const indexItemAlreadyAdded = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const updatedItems = [...state.items];

    // if item already added to cart, do this below
    if (indexItemAlreadyAdded > -1) {
    }
    // if an item is the first time added to cart, do this below
    else {
      updatedItems.push(action.item);
    }
  }

  if (action === "REMOVE_ITEM") {
    // remove item
    console.log("item removed");
  }

  return state;
}

export const CartContextProvider = ({ children }) => {
  const [cartValues, dispatchCartValues] = useReducer(cartValuesReducerFn, {
    items: [],
  });

  return (
    <CartContext.Provider value={"something"}>{children}</CartContext.Provider>
  );
};

export default CartContext;
