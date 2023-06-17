import { ERROR_ITEM, FETCH_ITEM, FETCH_ITEMS, LOADING_FETCH_ITEMS } from "./actionType"

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
      const url = "http://localhost:3000/items";
      const response = await fetch(url);
      if (!response.ok) throw new Error('ERR ~')
      let { data } = await response.json();
      dispatch(itemsFetchSuccess(data))
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(isLoadingItems(false))
    }
  }
}

export const postItem = (payload) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:3000/items";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "access_token": localStorage.access_token
        },
        body: JSON.stringify(payload)
      });
      let { message } = await response.json();
      if (!response.ok) throw { message }
      dispatch(fetchItems())
    } catch (err) {
      console.log('gamasuk');
      dispatch(itemErrorMsg(err))
    }
  }
}
export const deleteItem = (id) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:3000/items/" + id;
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          "access_token": localStorage.access_token
        }
      });
      if (!response.ok) throw new Error('ERR ~')
      dispatch(fetchItems())
    } catch (err) {
      console.log(err);
    }
  }
}
export const updateItem = (id, payload) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:3000/items/" + id;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "access_token": localStorage.access_token
        },
        body: JSON.stringify(payload)
      });
      let { message } = await response.json();
      if (!response.ok) throw { message: message }
      dispatch(fetchItems())
    } catch (err) {
      console.log(err);
    }
  }
}
export const fetchItem = (id) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:3000/items/" + id;
      const response = await fetch(url);
      if (!response.ok) throw new Error('ERR ~')
      let { data } = await response.json();
      dispatch(itemFetchSuccess(data))
    } catch (err) {
      console.log(err);
    }
  }
}