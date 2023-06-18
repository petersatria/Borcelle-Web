import { toast } from "react-hot-toast"
import { ERROR_ITEM, FETCH_ITEM, FETCH_ITEMS, LOADING_FETCH_ITEMS } from "./actionType"

const BASE_URL = 'https://borcelle-server.petersox.online'

export const itemsFetchSuccess = (payload) => {
  return {
    type: FETCH_ITEMS,
    payload
  }
}
export const itemFetchSuccess = (payload) => {
  return {
    type: FETCH_ITEM,
    payload
  }
}

export const itemErrorMsg = (err) => {
  return {
    type: ERROR_ITEM,
    err
  }
}

export const isLoadingItems = (boolean) => {
  return {
    type: LOADING_FETCH_ITEMS,
    payload: boolean
  }
}

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoadingItems(true))
      const url = BASE_URL + "/items";
      const response = await fetch(url);
      let { data, message } = await response.json();
      if (!response.ok) throw message
      dispatch(itemsFetchSuccess(data))
    } catch (err) {
      toast.error(err)
    } finally {
      dispatch(isLoadingItems(false))
    }
  }
}

export const postItem = (payload) => {
  return async (dispatch) => {
    try {
      const url = BASE_URL + "/items";
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
      dispatch(fetchItems())
    } catch (err) {
      toast.error(err)
      dispatch(itemErrorMsg(err))
    }
  }
}
export const deleteItem = (id) => {
  return async (dispatch) => {
    try {
      const url = BASE_URL + "/items/" + id;
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          "access_token": localStorage.access_token
        }
      });
      let { message } = await response.json();
      if (!response.ok) throw message
      dispatch(fetchItems())
    } catch (err) {
      toast.error(err)
    }
  }
}
export const updateItem = (id, payload) => {
  return async (dispatch) => {
    try {
      const url = BASE_URL + "/items/" + id;
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
      dispatch(fetchItems())
    } catch (err) {
      toast.error(err)
    }
  }
}
export const fetchItem = (id) => {
  return async (dispatch) => {
    try {
      const url = BASE_URL + "/items/" + id;
      const response = await fetch(url);
      let { data, message } = await response.json();
      if (!response.ok) throw message
      dispatch(itemFetchSuccess(data))
    } catch (err) {
      toast.error(err)
    }
  }
}