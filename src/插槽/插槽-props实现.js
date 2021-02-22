import React, { Component } from 'react'
import './style.css'

class NavBar extends Component {
  constructor(props) {
    super(props)


  }
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props
    return (
      <div className="container">
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    )
  }
}


export default class App extends Component {
  render() {
    const navLeft = <div>返回</div>
    const navCenter = <div>购物街</div>
    const navRight = <div>更多</div>

    return (
      <div >
        <NavBar leftSlot={navLeft} centerSlot={navCenter} rightSlot={navRight}/>
      </div>
    )
  }
}
