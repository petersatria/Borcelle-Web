import { FETCH_CATEGORIES, FETCH_CATEGORY } from "./actionType"

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

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:3000/categories";
      const response = await fetch(url);
      if (!response.ok) throw new Error('ERR ~')
      let result = await response.json();
      dispatch(categoriesFetchSuccess(result))
    } catch (err) {
      console.log(err);
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
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('ERR ~')
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
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('ERR ~')
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
      let result = await response.json();
      dispatch(categoryFetchSuccess(result))
    } catch (err) {
      console.log(err);
    }
  }
}