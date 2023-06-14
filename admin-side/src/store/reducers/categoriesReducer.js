import { FETCH_CATEGORIES, FETCH_CATEGORY } from "../actions/actionType"

const initialState = {
  data: [],
  category: {}
}

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case FETCH_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    default:
      return state
  }
}

export default categoriesReducer