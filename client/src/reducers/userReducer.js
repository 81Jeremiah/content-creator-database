export default (state =
  {loading: false,
   user: []
   }
  , action) => {

  switch(action.type) {

    case 'SENDING_USER':
      return {...state, loading: true}


    case 'CREATE_USER':
      return {...state, loading: false, user: action.user }
    default:
      return state;
  }
}
