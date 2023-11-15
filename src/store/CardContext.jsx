import { createContext, useReducer } from "react";

const CartContext = createContext({
  item: [],
  addItem: () => {},
  removeItem: () => {},
});

function cartValuesReducerFn(state, action) {
  if (action === "ADD_ITEM") {
    // ADD ITEM
    console.log("item added");
  }
  if (action === "REMOVE_ITEM") {
    // remove item
    console.log("item removed");
  }

  return state;
}

export const CartContextProvider = ({ children }) => {
  const [cartValues, dispatchCartValues] = useReducer(cartValuesReducerFn, {
    item: [],
  });

  return (
    <CartContext.Provider value={"something"}>{children}</CartContext.Provider>
  );
};

export default CartContext;
