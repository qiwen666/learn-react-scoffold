import React, { Component } from 'react'
import { EventEmitter } from 'events'

const eventBus = new EventEmitter()

class ProfileHeader extends Component{
  render() {
    return (
      <div>
        <button onClick={e => this.btnClick()}>按钮</button>
      </div>
    )  
  }

  btnClick() {
    eventBus.emit("handleClick", "why", 18)
  }
}

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
        </ul>
      </div>
    )
  }
}


export default class App extends Component {
  componentDidMount() {
    eventBus.addListener("handleClick", this.handleHeaderClick)
  }
  handleHeaderClick(nickname, num) {
    console.log(nickname,num);
  }
  render() {
    return (
      <div>
        <Profile/> 
      </div>
    )
  }
}
