import React, { PureComponent } from 'react'

export default class About extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        About
        <h2>当前计数：{this.state.counter}</h2>
        <button>+1</button>
        <button>-1</button>
      </div>
    )
  }
}
