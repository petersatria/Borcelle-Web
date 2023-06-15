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