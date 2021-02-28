import React, { PureComponent } from 'react'
import store from './store'
import CartList from './components/CartList'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <CartList store={this.props.store}/>
      </div>
    )
  }
}
