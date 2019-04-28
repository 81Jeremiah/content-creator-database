import { combineReducers } from 'redux';
import creatorReducer from './creatorReducer'


const rootReducer = combineReducers({
  creators: creatorReducer
})

export default rootReducer;
