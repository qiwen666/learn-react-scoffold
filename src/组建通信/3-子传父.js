import React, { Component } from 'react'

function CounterButton(props) {
  const { operator, btnClick } = props
  return (
    <button onClick={btnClick}>{operator}</button>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <CounterButton operator="+1" btnClick={e => this.changeCounter(1)}/>
        <CounterButton operator="-1" btnClick={e => this.changeCounter(-1)}/>
      </div>
    )
  }

  changeCounter(count) {
    this.setState({
      counter: this.state.counter + count
    })
  }
}
