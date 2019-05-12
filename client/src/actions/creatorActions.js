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
     console.log(creatorId)
    return (dispatch) => {
      dispatch({type: 'LOADING_CREATOR'});
      return fetch(`/api/creators/${creatorId}`)
      .then(response => response.json())
      .then(creator => {

        return dispatch({ type: 'FETCH_CREATOR', creator: creator })
      })

    }
  }

  export function createCreator(creator){
    return dispatch => {

      dispatch({ type: 'SENDING_CREATOR' });
      return fetch(`/api/creators`, {
        method: "POST",
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        // body: JSON.stringify( creator )
        body: creator
    })
        .then(response => response.json())
        .then(creator => dispatch({ type: 'CREATE_CREATOR', creator: creator }));
    };
  }
