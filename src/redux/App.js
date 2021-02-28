import React, { PureComponent } from 'react'
import UseRedux from './redux的使用/UseRedux'
import store from './store/index'
import { addAction } from './store/actionCreators'

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(addAction(5))

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UseRedux/>
      </div>
    )
  }
}
