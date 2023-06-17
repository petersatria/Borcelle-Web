import { ERROR_USERS, LOGIN_ADMIN } from "../actions/actionType"

const initialState = {
  data: null,
  err: null
}

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ADMIN:
      return {
        ...state,
        data: action.payload
      }
    case ERROR_USERS:
      return {
        ...state,
        err: action.err
      }
    default:
      return state
  }
}

export default usersReducer