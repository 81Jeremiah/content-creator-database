// import fetch from 'isomorphic-fetch';

import * as types from './actionsTypes';

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
    .then(jresp => {
        dispatch(authenticate({
          username: user.username,
          email: user.email,
          password: user.password})
        );
      })
    // .then(user =>
    //
    //   dispatch(authenticate({
    //      username: user.username,
    //      email: user.email,
    //      password: user.password})
    //   )
    // )
    // .catch((errors) => {
    //     dispatch(authFailure(errors))
    //   })
  };
}


export const authenticate = (credentials) => {
  return dispatch => {
    dispatch(authRequest())

    return fetch(`/api/user_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({auth: credentials})
    })
      .then(res => res.json())
      .then((response) => {
          const token = response.jwt;
          localStorage.setItem('token', token);

          return getUser(credentials)
      })
      .then((user) => {
        debugger
        console.log(user)
          dispatch(authSuccess(user, localStorage.token))
      })
      .catch((errors) => {
          dispatch(authFailure(errors))
          localStorage.clear()
      })
  }
}

export const getUser = (credentials) => {
  const request = new Request(`/api/find_user`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`,
    }),
    body: JSON.stringify(credentials)
  })
  return fetch(request)
    .then(response => response.json())
    .then(userJson => {return userJson})

    .catch(error => {
      return error;
    });

}

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    return dispatch({
      type: types.LOGOUT
    });
  }
}
