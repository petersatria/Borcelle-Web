import { FETCH_ITEM, FETCH_ITEMS, LOADING_FETCH } from "./actionType"

const initialState = {
  items: [],
  item: null,
  isLoading: true
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      }
    case FETCH_ITEM:
      return {
        ...state,
        item: action.payload
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