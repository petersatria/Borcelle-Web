import { FETCH_CATEGORIES, FETCH_ITEM, FETCH_ITEMS, FILTER_ITEM, LOADING_FETCH } from "./actionType"

const initialState = {
  items: [],
  item: null,
  isLoading: true,
  categories: [],
  filteredItems: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload
      }
    case FETCH_ITEM:
      return {
        ...state,
        item: action.payload
      }
    case FILTER_ITEM:
      return {
        ...state,
        filteredItems: action.payload
      }
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case LOADING_FETCH:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state
  }
}
export default rootReducer