import { toast } from "react-hot-toast"
import { FETCH_CATEGORIES, FETCH_CATEGORY, LOADING_FETCH_CATEGORIES } from "./actionType"

const BASE_URL = 'https://borcelle-server.petersox.online'

export const categoriesFetchSuccess = (payload) => {
  return {
    type: FETCH_CATEGORIES,
    payload
  }
}
export const categoryFetchSuccess = (payload) => {
  return {
    type: FETCH_CATEGORY,
    payload
  }
}

export const isLoadingCategories = (boolean) => {
  return {
    type: LOADING_FETCH_CATEGORIES,
    payload: boolean
  }
}

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoadingCategories(true))
      const url = BASE_URL + "/categories";
      const response = await fetch(url);
      let { data, message } = await response.json();
      if (!response.ok) throw message
      dispatch(categoriesFetchSuccess(data))
    } catch (err) {
      toast.error(err)
    } finally {
      dispatch(isLoadingCategories(false))
    }
  }
}

export const postCategories = (payload) => {
  return async (dispatch) => {
    try {
      const url = BASE_URL + "/categories";
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
      dispatch(fetchCategories())
    } catch (err) {
      toast.error(err)
    }
  }
}
export const deleteCategory = (id) => {
  return async (dispatch) => {
    try {
      const url = BASE_URL + "/categories/" + id;
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          "access_token": localStorage.access_token
        }
      });
      let { message } = await response.json();
      if (!response.ok) throw message
      dispatch(fetchCategories())
    } catch (err) {
      toast.error(err)
    }
  }
}
export const updateCategories = (id, payload) => {
  return async (dispatch) => {
    try {
      const url = BASE_URL + "/categories/" + id;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "access_token": localStorage.access_token
        },
        body: JSON.stringify(payload)
      });
      let { message } = await response.json();
      if (!response.ok) throw message
      dispatch(fetchCategories())
    } catch (err) {
      toast.error(err)
    }
  }
}
export const fetchCategory = (id) => {
  return async (dispatch) => {
    try {
      const url = BASE_URL + "/categories/" + id;
      const response = await fetch(url);
      let { data, message } = await response.json();
      if (!response.ok) throw message
      dispatch(categoryFetchSuccess(data))
    } catch (err) {
      toast.error(err)
    }
  }
}