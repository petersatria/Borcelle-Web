import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  items: itemsReducer,
  categories: categoriesReducer
})

export default rootReducer