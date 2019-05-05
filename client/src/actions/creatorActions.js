export const fetchCreators = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_CREATORS'});
    return fetch('/api/creators')
    .then(response => response.json())
    .then(creators => {
      return dispatch({ type: 'FETCH_CREATORS', creators: creators })
    })
  }
}
 export const fetchCreator = (creatorId) => {
    return (dispatch) => {
      dispatch({type: 'LOADING_CREATOR'});
      return fetch(`/api/creators/${creatorId}`)
      .then(response => response.json())
      .then(creator => {
        return dispatch({ type: 'FETCH_CREATOR', creator: creator })
      })

    }
  }

 
