import { toast } from "react-hot-toast"
import { FETCH_CATEGORIES, FETCH_ITEM, FETCH_ITEMS, FILTER_ITEM, LOADING_FETCH, } from "./actionType"

const BASE_URL = 'https://borcelle-server-web.petersox.online'

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

export const categoriesFetchSuccess = (payload) => {
  return {
    type: FETCH_CATEGORIES,
    payload
  }
}

export const isLoading = (boolean) => {
  return {
    type: LOADING_FETCH,
    payload: boolean
  }
}

export const itemsFilterSuccess = (payload) => {
  return {
    type: FILTER_ITEM,
    payload
  }
}

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const url = BASE_URL + "/items";
      const response = await fetch(url);
      let { data, message } = await response.json();
      if (!response.ok) throw message
      dispatch(itemsFetchSuccess(data))
    } catch (err) {
      toast.error(err)
    } finally {
      dispatch(isLoading(false))
    }
  }
}

export const fetchItem = (id) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const url = BASE_URL + "/items/" + id;
      const response = await fetch(url);
      let { data, message } = await response.json();
      if (!response.ok) throw message
      dispatch(itemFetchSuccess(data))
    } catch (err) {
      toast.error(err)
    } finally {
      dispatch(isLoading(false))
    }
  }
}

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const url = BASE_URL + "/categories";
      const response = await fetch(url);
      let { data, message } = await response.json();
      if (!response.ok) throw message
      dispatch(categoriesFetchSuccess(data))
    } catch (err) {
      toast.error(err)
    } finally {
      dispatch(isLoading(false))
    }
  }
}

export const filterItem = (categoryId, items) => {
  let result = items
  if (categoryId) {
    result = items.filter(e => e.categoryId == categoryId)
  }
  return dispatch => {
    dispatch(itemsFilterSuccess(result))
  }
}