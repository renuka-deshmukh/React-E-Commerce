import React, { createContext, useEffect, useReducer, useContext } from "react";
import { initialState, reducer } from "../reducer/cartReducer";
import { AuthContext } from "./AuthProvider"; // ✅ import AuthContext

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { loggedUser } = useContext(AuthContext); // ✅ current logged-in user

  const getInitialCart = () => {
  if (loggedUser) {
    try {
      const cartFromLocal = JSON.parse(
        localStorage.getItem(`ProductCart_${loggedUser.email}`)
      );
      return cartFromLocal && Array.isArray(cartFromLocal.cart)
        ? { cart: cartFromLocal.cart }
        : initialState;
    } catch {
      return initialState;
    }
  }
  return initialState;
};

  const [state, dispatch] = useReducer(reducer, initialState, getInitialCart);

  // ✅ Save user-specific cart
  useEffect(() => {
    if (loggedUser) {
      localStorage.setItem(
        `ProductCart_${loggedUser.email}`,
        JSON.stringify(state)
      );
    }
  }, [state, loggedUser]);

  // ✅ When user changes (login/logout), reload their cart
 useEffect(() => {
  if (loggedUser) {
    try {
      const cartFromLocal = JSON.parse(
        localStorage.getItem(`ProductCart_${loggedUser.email}`)
      );

      // ✅ Always ensure it has a cart array
      dispatch({ type: "LOAD_CART", payload: cartFromLocal?.cart || [] });
    } catch {
      dispatch({ type: "LOAD_CART", payload: [] });
    }
  } else {
    dispatch({ type: "LOAD_CART", payload: [] }); // empty cart for guests
  }
}, [loggedUser]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
