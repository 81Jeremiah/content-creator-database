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

      return {...state, loading: false, creators:[...state.creators], creator: action.creator }

    case 'SENDING_CREATOR':
      return {...state, loading: true}

    case 'CREATE_CREATOR':
      return {...state, loading: false, creators: [...state.creators, action.creator]}

    case 'SENDING_TRENDING':
        return {...state, loading: true}

    case 'UPDATE_TRENDING':
      const creators = state.creators.filter(creator => creator.id !== action.creator.id)

      return {...state, loading: false, creators: creators.concat(action.creator)}

    default:
      return state;
  }
}
