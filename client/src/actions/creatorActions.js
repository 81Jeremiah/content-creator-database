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
