import { FETCH_ITEM, FETCH_ITEMS } from "../actions/actionType"

const initialState = {
  items: [],
  item: null

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
    default:
      return state
  }
}

export default itemsReducer