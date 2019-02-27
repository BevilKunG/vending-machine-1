import { INCREASE_BALANCE,RESET_BALANCE } from '../actions/types'

export default (state = 0, action) => {
  switch(action.type){
    case INCREASE_BALANCE:
      return state + action.payload
    case RESET_BALANCE:
      return 0
    default:
      return state
  }
}
