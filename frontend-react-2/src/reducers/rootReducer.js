import {combineReducers} from "redux";
import CounterReducer from "./CounterReducer";

const rootReducer = combineReducers({counter:CounterReducer})

export default rootReducer
