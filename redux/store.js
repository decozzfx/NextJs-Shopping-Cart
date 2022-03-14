import { createStore } from "redux";  // to store the combine data as value for Provider
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension"; // enhancer in store

const store = createStore(rootReducer, composeWithDevTools())

export default store