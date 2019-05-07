import { combineReducers } from 'redux';
import creatorReducer from './creatorReducer'
import userReducer from './userReducer';

const rootReducer = combineReducers({
  creators: creatorReducer,
  users: userReducer
})

export default rootReducer;
