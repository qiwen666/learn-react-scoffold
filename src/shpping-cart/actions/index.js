import * as types from '../constants/actionType'

export const increment = (id) => ({
  type: types.CART_AMOUNT_INCREMENT,
  id
})

export const decrement = (id) => ({
  type: types.CART_AMOUNT_DECREMENT,
  id
})
