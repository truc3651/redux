import { combineReducers } from 'redux'
import hobbyReducer from './hobby'

export default combineReducers({
  hobby: hobbyReducer,
})
