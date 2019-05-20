export default (state =
  {loading: false,
   foundCreators: []
   }
  , action) => {

  switch(action.type) {

    case 'SEARCHING':
      return { loading: true}


    case 'SEARCH_RESULTS':
      console.log(action.creators)
      return {loading: false, foundCreators: action.creators }

    default:
      return state;
  }
}
