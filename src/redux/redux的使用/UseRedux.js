import React, { PureComponent } from 'react';
import { createStore } from 'redux';

// 初始化数据
const initState = {
  counter: 0,
};
// reducer
function reducer(state = initState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'ADD_NUMBER':
      return { ...state, counter: state.counter + action.num };
    default:
      return state;
  }
}

// store
const store = createStore(reducer);

// actions
const action1 = { type: 'INCREMENT' };
const action2 = { type: 'DECREMENT' };

const action3 = { type: 'ADD_NUMBER', num: 5 };

// 派发action
store.dispatch(action1);
store.dispatch(action2);

store.dispatch(action3);

// 订阅store的修改
store.subscribe(() => {
  console.log('state发生改变',store.getState().counter);
});

export default class UseRedux extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  render() {
    return <div></div>;
  }
}
