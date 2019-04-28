export default (state =
  {loading: false,
   creators: [] }
  , action) => {

  switch(action.type) {

    case 'LOADING_CREATORS':
     return {...state, loading: true}

    case 'FETCH_CREATORS':
      return { ...state, loading: false, creators: action.creators }


    default:
      return state;
  }
}
