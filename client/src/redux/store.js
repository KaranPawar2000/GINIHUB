import {createStore,combineReducers,applyMiddleware} from 'redux';  

import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension'; // passes the middleware by connecting store

import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';

const reducer =combineReducers({                                    // combine multiple reducer together
    getProducts:getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart:cartReducer
});

const middleware = [thunk];                                         //Thunk middleware allows you to create action creators that return functions instead of action objects. These functions are called "thunks."


const store = createStore(                                         //create store get two arguments reducer and middleware 
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;