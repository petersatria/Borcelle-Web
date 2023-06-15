import { LOGIN_ADMIN } from "./actionType";

export const loginSuccess = (payload) => {
  return {

    type: LOGIN_ADMIN,
    payload

  }
}

export const registerAdmin = (payload) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:3000/register";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "access_token": localStorage.access_token
        },
        body: JSON.stringify(payload)
      });
      let { message } = await response.json();
      if (!response.ok) throw { message: message }
    } catch (err) {
      console.log(err);
    }
  }
}

export const loginAdmin = (payload) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:3000/login";
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
      console.log(err);
    }
  }
}


