import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {ReducerAuth} from "./Authentication/Reducer"
import {ReducerMessege} from "./Messege/MessegeReducer"



const rootReducer = combineReducers({
    ReducerAuth , ReducerMessege
  });
const store = legacy_createStore(rootReducer , applyMiddleware(thunk))

export {store}