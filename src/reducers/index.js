import { combineReducers } from 'redux'
import balanceReducer from './balanceReducer'
import changesReducer from './changesReducer'
import itemsReducer from './itemsReducer'
import labelReducer from './labelReducer'

export default combineReducers({
  balance:balanceReducer,
  changes:changesReducer,
  items:itemsReducer,
  label:labelReducer
})
