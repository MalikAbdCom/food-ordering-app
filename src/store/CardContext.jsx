import { createContext } from "react";

const CartContext = createContext({
  item: [],
  addItem: () => {},
  removeItem: () => {},
});

export const CartContextProvider = ({ children }) => {
  return (
    <CartContext.Provider value={"something"}>{children}</CartContext.Provider>
  );
};

export default CartContext;
