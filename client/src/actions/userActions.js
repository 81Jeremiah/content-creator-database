import fetch from 'isomorphic-fetch';

import * as types from './actions.Types';

const authRequest = () => {
  return {
    type: types.AUTHENTICATION_REQUEST
  }
}

const authSuccess = (user, token) => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  }
}

const authFailure = (errors) => {
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  }
}

export const createUser = (user) => {

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
