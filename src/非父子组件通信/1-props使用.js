import React, { Component } from 'react'


function ProfileHeader(props) {
  return (
    <div>
      <h2>用户昵称：{props.nickName}</h2>
      <h2>用户等级：{props.level}</h2>
    </div>
  )
}
class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader {...this.props}/>
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
  constructor(props) {
    super(props)

    this.state = {
      nickName: 'kaeery',
      level: 99
    }
  }
  render() {
    return (
      <div>
        <Profile {...this.state}/> {/**jsx语法 */}
      </div>
    )
  }
}
