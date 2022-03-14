import { combineReducers } from "redux";
import shopReducer from './Shopping/shopping-reducer'

const rootReducer = combineReducers({
    shop : shopReducer,
}) // combine multiple state to one form

export default rootReducer