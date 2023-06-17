import { FETCH_CATEGORIES, FETCH_CATEGORY, LOADING_FETCH_CATEGORIES } from "./actionType"

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
      const url = "http://localhost:3000/categories";
      const response = await fetch(url);
      if (!response.ok) throw new Error('ERR ~')
      let { data } = await response.json();
      dispatch(categoriesFetchSuccess(data))
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(isLoadingCategories(false))
    }
  }
}

export const postCategories = (payload) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:3000/categories";
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
      dispatch(fetchCategories())
    } catch (err) {
      console.log(err);
    }
  }
}
export const deleteCategory = (id) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:3000/categories/" + id;
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          "access_token": localStorage.access_token
        }
      });
      if (!response.ok) throw new Error('ERR ~')
      dispatch(fetchCategories())
    } catch (err) {
      console.log(err);
    }
  }
}
export const updateCategories = (id, payload) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:3000/categories/" + id;
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
      dispatch(fetchCategories())
    } catch (err) {
      console.log(err);
    }
  }
}
export const fetchCategory = (id) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:3000/categories/" + id;
      const response = await fetch(url);
      if (!response.ok) throw new Error('ERR ~')
      let { data } = await response.json();
      dispatch(categoryFetchSuccess(data))
    } catch (err) {
      console.log(err);
    }
  }
}