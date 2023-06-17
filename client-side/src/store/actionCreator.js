import { FETCH_ITEM, FETCH_ITEMS, LOADING_FETCH, } from "./actionType"

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

export const isLoading = (boolean) => {
  return {
    type: LOADING_FETCH,
    payload: boolean
  }
}

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const url = "http://localhost:3000/items";
      const response = await fetch(url);
      if (!response.ok) throw new Error('ERR ~')
      let { data } = await response.json();
      dispatch(itemsFetchSuccess(data))
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(isLoading(false))
    }
  }
}

export const fetchItem = (id) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const url = "http://localhost:3000/items/" + id;
      const response = await fetch(url);
      if (!response.ok) throw new Error('ERR ~')
      let { data } = await response.json();
      dispatch(itemFetchSuccess(data))
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(isLoading(false))
    }
  }
}