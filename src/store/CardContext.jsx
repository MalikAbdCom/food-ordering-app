import { createContext, useReducer } from "react";

const CartContext = createContext({
  item: [],
  addItem: () => {},
  removeItem: () => {},
});

function cartValuesReducerFn(state, action) {
  if (action === "ADD_ITEM") {
    // 1st check item
    const indexItemAlreadyAdded = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const updatedItems = [...state.items];

    // if item already added to cart, do this below
    if (indexItemAlreadyAdded > -1) {
      const existingItem = state.item[indexItemAlreadyAdded];

      // only add quantity 1 to existing item
      const updatedItem = {
        ...state.items,
        quantity: (existingItem.quantity += 1),
      };

      // update item that already on the cart
      updatedItems[indexItemAlreadyAdded] = updatedItem;
    }
    // if an item is the first time added to cart, do this below
    else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
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
