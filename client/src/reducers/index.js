import { combineReducers } from 'redux';
import creatorReducer from './creatorReducer'
import userReducer from './userReducer';
import authReducer from './authReducer'

const rootReducer = combineReducers({
  creators: creatorReducer,
  users: userReducer,
  auth: authReducer
})

export default rootReducer;
