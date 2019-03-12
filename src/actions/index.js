import axios from 'axios'
import { INCREASE_BALANCE, RESET_BALANCE, REFUND_CHANGES, FETCH_ITEMS, SET_LABEL } from './types'

export const increaseBalance = (coin) => {
  return {
    type: INCREASE_BALANCE,
    payload: coin
  }
}

export const resetBalance = () => {
  return {
    type: RESET_BALANCE,
  }
}

export const refundChanges = (refundCoins) => {
  return {
    type: REFUND_CHANGES,
    payload:refundCoins
  }
}

export const fetchItems = () => async dispatch => {
  const res = await axios.get('https://www.mocky.io/v2/5c77c5b330000051009d64c9')
  return dispatch({
    type:FETCH_ITEMS,
    payload:res.data
  })
}

export const setLabel = (label) => {
  return {
    type:SET_LABEL,
    payload:label
  }
}
