import { ERROR_ITEM, FETCH_ITEM, FETCH_ITEMS, LOADING_FETCH_ITEMS } from "../actions/actionType"

const initialState = {
  items: [],
  item: null,
  err: null,
  isLoading: true
}

function itemsReducer(state = initialState, action) {
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
    case ERROR_ITEM:
      return {
        ...state,
        err: action.err
      }
    case LOADING_FETCH_ITEMS:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state
  }
}

export default itemsReducer