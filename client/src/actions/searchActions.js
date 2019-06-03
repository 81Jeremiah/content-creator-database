//return search results
export const search = (query) => {
  return (dispatch) => {
    dispatch({type: 'SEARCHING'});
    return fetch(`/api/creators/search?creator_name=${query}`)
    .then(response => response.json())
    .then(creators => {
      return dispatch({ type: 'SEARCH_RESULTS', creators: creators })
    })
  }
}
