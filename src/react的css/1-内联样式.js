import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      titleColor: 'red'
    }
  }
  render() {
    return (
      <div>
        <h2 style={{color: this.state.titleColor, fontSize: '20px'}}>我是App标题</h2>
        <h2>我是一段文字描述</h2>
      </div>
    )
  }
}
