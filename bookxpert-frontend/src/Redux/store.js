import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {ReducerAuth} from "./Authentication/Reducer"

const rootReducer = combineReducers({
    ReducerAuth
  });
const store = legacy_createStore(rootReducer , applyMiddleware(thunk))

export {store}