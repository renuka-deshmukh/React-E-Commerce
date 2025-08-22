import React, { createContext, useEffect, useReducer } from 'react';
import {initialState, reducer} from '../reducer/cartReducer';

export const CartContext = createContext()

const CartProvider = ({children}) => {
   const [state, dispatch] = useReducer(reducer, initialState , (init)=> {
    try{
   const productFromLocal = JSON.parse(localStorage.getItem('ProductCart'));
    return productFromLocal ? productFromLocal : init;
    } catch {
        return init;
    }
   })

   useEffect(()=>{
    localStorage.setItem("ProductCart", JSON.stringify(state));
   }, [state]);

  return (
<CartContext.Provider value={{state, dispatch}}>
{children}
</CartContext.Provider>
  )
}

export { CartProvider}