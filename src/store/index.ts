import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import { SaveAmountReducer } from './reducers';

const RootReducer = combineReducers({
    saveAmount: SaveAmountReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));