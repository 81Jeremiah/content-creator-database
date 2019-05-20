import { combineReducers } from 'redux';
import creatorReducer from './creatorReducer'
import userReducer from './userReducer';
import authReducer from './authReducer'
import searchReducer from './searchReducer';
const rootReducer = combineReducers({
  creators: creatorReducer,
  users: userReducer,
  auth: authReducer,
  search: searchReducer
})

export default rootReducer;
