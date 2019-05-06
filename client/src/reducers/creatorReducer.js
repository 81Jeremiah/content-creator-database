export default (state =
  {loading: false,
   creators: [],
   creator:[]
   }
  , action) => {

  switch(action.type) {

    case 'LOADING_CREATORS':
     return {...state, loading: true}

    case 'FETCH_CREATORS':
      return { ...state, loading: false, creators: action.creators }

    case 'LOADING_CREATOR':
      return {...state, loading: true}

    case 'FETCH_CREATOR':
      debugger
      return {...state, loading: false, creators:[...state.creators], creator: action.creator }

    case 'SENDING_CREATOR':
      return {...state, loading: true}

    case 'CREATE_CREATOR':
      return {...state, loading: false, creators: [...state.creators, action.creator]}

    default:
      return state;
  }
}
