import { applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk'
import  bondReducer  from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(bondReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
