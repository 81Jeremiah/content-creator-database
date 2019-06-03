// sends request for top 9 creators on home page
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
// send request to find creator on show page
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
//send creator data to api
  export function createCreator(creator){
    return dispatch => {

      dispatch({ type: 'SENDING_CREATOR' });
      return fetch(`/api/creators`, {
        method: "POST",
        // removed headers to get active storage attachments to work
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

//communicates with API update the trend count
  export const updateTrending = (creatorId, trending) => {
    const body = JSON.stringify( {creator:{trending:trending}} )
    return (dispatch) =>{
      dispatch({ type: 'SENDING_TRENDING' });
      return fetch(`/api/creators/`+ creatorId , {
        method: "PATCH",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: body
      })
      .then(response => response.json())
      .then(() => dispatch(fetchCreators()));
    };
  }
