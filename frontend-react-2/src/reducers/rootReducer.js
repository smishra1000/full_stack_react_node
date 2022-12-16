import {combineReducers} from "redux";
import CompanyReducer from "./CompanyReducer";
import CounterReducer from "./CounterReducer";

const rootReducer = combineReducers({counter:CounterReducer,companies:CompanyReducer})

export default rootReducer
