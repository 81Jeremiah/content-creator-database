
export const signup = (user) => {

  return dispatch => {
    return fetch(`/api/users/new`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify( user )
    })
    .then(response => response.json())
    .then(user =>
      dispatch({type: 'CREATE_USER',
        username: user.username,
        email: user.email,
        password: user.password}))

  };
}


export function logoutUser(){
    localStorage.removeItem('jwtToken')
}
