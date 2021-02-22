import React, { Component } from 'react'

// 1、创建共享的context对象
const userContext = React.createContext({  
  nickName: 'kaeery',
  level: -1
})

class ProfileHeader extends Component{
  render() {
    console.log(this.context);
    return (
      <div>
        {/* 4、使用 */}
        <h2>用户昵称：{this.context.nickName}</h2>
        <h2>用户等级：{this.context.level}</h2>
      </div>
    )  
  }
}
// 3、
ProfileHeader.contextType = userContext //非父子组件的关键

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
        {/* 2、 */}
        <userContext.Provider value={{...this.state}}>
          <Profile/> 
        </userContext.Provider>
      </div>
    )
  }
}
