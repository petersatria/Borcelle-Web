import { toast } from "react-hot-toast";
import { ERROR_USERS, LOGIN_ADMIN } from "./actionType";

const BASE_URL = 'https://borcelle-server.petersox.online'

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_ADMIN,
    payload
  }
}

export const itemErrorMsg = (err) => {
  return {
    type: ERROR_USERS,
    err
  }
}

export const registerAdmin = (payload) => {
  return async (dispatch) => {
    try {
      const url = BASE_URL + "/register";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "access_token": localStorage.access_token
        },
        body: JSON.stringify(payload)
      });
      let { message } = await response.json();
      if (!response.ok) throw message
    } catch (err) {
      toast.error(err)
      dispatch(itemErrorMsg(err))
    }
  }
}

export const loginAdmin = (payload) => {
  return async (dispatch) => {
    try {
      const url = BASE_URL + "/login";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "access_token": localStorage.access_token
        },
        body: JSON.stringify(payload)
      });
      let data = await response.json();
      if (!response.ok) throw { message: data.message }
      dispatch(loginSuccess(data))
      localStorage.access_token = data.access_token
      localStorage.user = JSON.stringify({ username: data.username, email: data.email })
    } catch (err) {
      toast.error(err.message)

    }
  }
}


