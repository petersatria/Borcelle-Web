import { FETCH_CATEGORIES, FETCH_CATEGORY, LOADING_FETCH_CATEGORIES } from "../actions/actionType"

const initialState = {
  data: [],
  category: null,
  isLoading: true
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
    case LOADING_FETCH_CATEGORIES:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state
  }
}

export default categoriesReducer