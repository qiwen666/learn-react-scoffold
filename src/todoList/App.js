import React, { PureComponent } from 'react'
import TodoList from './TodoList'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <TodoList/>
      </div>
    )
  }
}
