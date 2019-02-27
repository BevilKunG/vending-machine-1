import { REFUND_CHANGES } from '../actions/types'

export default (state = [], action) => {
  switch(action.type){
    case REFUND_CHANGES:
      return action.payload
    default:
      return state
  }
}
