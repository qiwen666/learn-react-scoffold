import React, { PureComponent } from 'react'
import './style.css'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="title">我是App标题</h2>
        <h2>我是一段文字描述</h2>
      </div>
    )
  }
}
