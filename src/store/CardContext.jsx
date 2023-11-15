import { createContext } from "react";

export const CartContext = createContext({
  item: [],
  addItem: () => {},
  removeItem: () => {},
});

export default function CardContextProvider({ children }) {
  return (
    <CartContext.provider value={"something"}>{children}</CartContext.provider>
  );
}
