import React, { Component } from 'react'
import './style.css'

class NavBar extends Component {
  constructor(props) {
    super(props)


  }
  render() {
    return (
      <div className="container">
        <div className="left">{this.props.children[0]}</div>
        <div className="center">{this.props.children[1]}</div>
        <div className="right">{this.props.children[2]}</div>
      </div>
    )
  }
}


export default class App extends Component {
  render() {

    return (
      <div >
        <NavBar>
          <div>返回</div>
          <div>购物街</div>
          <div>更多</div>
        </NavBar>
      </div>
    )
  }
}
