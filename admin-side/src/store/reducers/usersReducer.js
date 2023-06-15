import { LOGIN_ADMIN } from "../actions/actionType"

const initialState = {
  data: null
}

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ADMIN:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export default usersReducer