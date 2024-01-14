//SOURCE OF INFORMATION FOR REDUX STORE
//DESCRIBE TYPE OF ACTION
import axios from "axios";
import * as actionTypes from '../constants/productConstant'; 

const URL = 'http://localhost:8000';

//dispatch is fundamental method of updating a redux store state
//USED TO SEND ACTION TO STORE
export const getProducts = ()=> async (dispatch) => {                        //we use middleware here which gives access of dispatch
    try{
       const {data} = await axios.get(`${URL}/products`)                     //object distructuring concept
                                                                             //Object destructuring is a feature in JavaScript that allows you to extract specific properties from an object and assign them to variables in a more concise and readable way.  
       dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data })       //dispatch function internally call reducer (imp interview):Reducer
    }
    catch(error){
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message})
    }
}

export const getProductDetails  = (id) => async (dispatch) => {
try{
dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});
const {data} = await axios.get(`${URL}/product/${id}`);
dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS,payload:data })
}catch(error){
    dispatch({type:actionTypes.GET_PRODUCT_DETAILS_FAIL,payload:error.message})
}

}