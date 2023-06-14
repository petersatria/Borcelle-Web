import { FETCH_ITEMS } from "./actionType"

export const itemsFetchSuccess = (payload) => {
  return {
    type: FETCH_ITEMS,
    payload
  }
}

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:3000/items?_embed=ingredients&_expand=category&_expand=user";
      const response = await fetch(url);
      if (!response.ok) throw new Error('ERR ~')
      let result = await response.json();
      dispatch(itemsFetchSuccess(result))
    } catch (err) {
      console.log(err);
    }
  }
}