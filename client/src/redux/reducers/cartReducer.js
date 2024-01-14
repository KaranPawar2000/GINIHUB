import * as actionType from '../constants/cartConstants'



export const cartReducer =(state= {cartItems:[]},action) => {
    switch(action.type) {
        case actionType.ADD_TO_CART:
        const item =action.payload;
        const exist =state.cartItems.find(product => product.id ===item.id);
        if(exist){                                                                                         //..state:sprade the previous state to add new item
          return {...state,cartItems:state.cartItems.map(data =>data.product===exist.product ? item :data)}// replace existing item
        }                               
        else{
            return {...state,cartItems: [...state.cartItems,item]}//add new item
        }

        case actionType.REMOVE_FROM_CART:
            return {...state,cartItems:state.cartItems.filter(product => product.id !==action.payload)} //filter function keeps item that are not equal to the id we want to delete
    
            default:
                return state;
        }
  

}