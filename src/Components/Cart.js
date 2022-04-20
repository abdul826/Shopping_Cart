import React, {createContext, useReducer, useEffect} from 'react';
import ContextCart from './ContextCart';
import {product} from './product';
import '../style/Cart.css';
import { reducer } from './reducer';

export const CartContext = createContext();

const initialState= {
  item:product,
  totalAmount:0,
  totalItem:0
}

const Cart = () => {

  // const [item, setItems] = useState(product);

    const [state,dispatch] = useReducer(reducer,initialState);

    // Remove Individual Item from Cart
    const removeItem = (id)=>{
      return dispatch({
        type:"REMOVE_ITEM",
        payload: id
      })
    }

    // Clear The Cart

    const clearCart = ()=>{
      return dispatch({
        type:"CLEAR_CART"
      })
    }

    // Increse the product 
    const increment = (id)=>{
      return dispatch({
        type:"INCREMENT",
        payload:id
      })
    }

     // Decrement the product 
     const decrement = (id)=>{
      return dispatch({
        type:"DECREMENT",
        payload:id
      })
    }

    // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [state.item]);

  return (
    <>
        <CartContext.Provider value={{...state, removeItem, clearCart, increment, decrement}}>
        <ContextCart />
        </CartContext.Provider>
    </>
  )
} 

export default Cart