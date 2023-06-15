import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import categoriesReducer from "./categoriesReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
  users: usersReducer
})

export default rootReducer