import * as types from '../constants/actionType';

const initState = {
  cartList: [
    {
      id: 1,
      title: 'Apple',
      price: 8888.66,
      amount: 10,
    },
    {
      id: 2,
      title: 'Orange',
      price: 4444.66,
      amount: 12,
    },
  ],
};
function tocartList(state = [], action) {
  switch (action.type) {
    case types.CART_AMOUNT_INCREMENT:
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            amount: (item.amount += 1),
          };
        }
        return item;
      });
    // return {...state, cartList: state.map(item => {
    //   if(item.id === action.id) {
    //     return {
    //       ...item,
    //       amount: item.amount += 1
    //     }
    //   }
    //   return item
    // })}
    case types.CART_AMOUNT_DECREMENT:
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            amount: (item.amount -= 1),
          };
        }
        return item;
      });

    default:
      return state;
  }
}
function reducer(state = initState, action) {
  switch (action.type) {
    case types.CART_AMOUNT_INCREMENT:
      return { ...state, cartList: tocartList(state.cartList, action) };
    case types.CART_AMOUNT_DECREMENT:
      return { ...state, cartList: tocartList(state.cartList, action) };
    default:
      return state;
  }
}

export default reducer;
