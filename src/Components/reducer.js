export const reducer = (state, action)=>{
    if(action.type === "REMOVE_ITEM"){
       return{
        ...state,
        item:state.item.filter((citem)=>{
            return citem.id !== action.payload
        })
       }

    }

    if(action.type === "CLEAR_CART"){
        return{
            ...state,
        item: []
        }
    }

    if(action.type === "INCREMENT"){
        let updateValue = state.item.map((curElem)=>{
            if(curElem.id === action.payload){
                return{
                    ...curElem,
                    quantity:curElem.quantity + 1
                }
            }
            return curElem;
        });
        return {...state, item:updateValue};
    }

    if(action.type === "DECREMENT"){
        let decreseValue = state.item.map((curElem)=>{
            if(curElem.id === action.payload && curElem.quantity > 1){
                return{
                    ...curElem,
                    quantity:curElem.quantity - 1
                    
                }
            }
            return curElem;
        });

        return {...state, item:decreseValue};
    }

    if (action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce(
          (accum, curVal) => {
            let { price, quantity } = curVal;
    
            let updatedTotalAmount = price * quantity;
            accum.totalAmount += updatedTotalAmount;
    
            accum.totalItem += quantity;
            return accum;
          },
          {
            totalItem: 0,
            totalAmount: 0,
          }
        );
        return { ...state, totalItem, totalAmount };
      }

    return state;
}