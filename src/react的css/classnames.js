import React, { PureComponent } from 'react'
import './style.css'
import classnames from 'classnames'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isActive: true,
      clickStatus: false
      
    }
  }
  render() {
    const { isActive } = this.state
    return (
      <div>
        {/* 方法一：动态绑定className */}
        <h2 className={"title " + (isActive ? "active" : "")}>我是标题</h2>
        <h2 className={["title", (isActive ? "active" : "")].join(" ")}>我是标题</h2>

        <br/>

        <span onClick={e=> this.changeColor()} className={this.state.clickStatus ? "box-content-color" : ""}>Hello,Kaeery</span>

        <br/>

        {/* 方法二：使用classnames库 */}
        <span
          className={classnames({
            'box-content-color': this.state.clickStatus
          })}
          onClick={e => this.changeColor()} 
        >
          Hello,Kaeery
        </span>
      </div>
    )
  }

  changeColor() {
    this.setState({
      clickStatus: !this.state.clickStatus
    })
  }
}
