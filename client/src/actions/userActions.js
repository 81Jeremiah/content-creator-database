
export const signup = (user) => {

  return dispatch => {
    dispatch({type: 'SENDING_USER'});
    return fetch(`/api/users`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify( user )
    })
    .then(response => response.json())
    .then(user =>
      dispatch({type: 'CREATE_USER', user: user}))
  };
}


export function logoutUser(){
    localStorage.removeItem('jwtToken')
}
