import React, { Component } from 'react'

// 1、创建共享的context对象
const userContext = React.createContext({  
  nickName: 'kaeery',
  level: -1
})

// 函数式组件使用Consumer
function ProfileHeader(props) {
  return (
    <div>
      <userContext.Consumer>
        {
          value => {
            return (
              <div>
                <h2>用户昵称：{value.nickName}</h2>
                <h2>用户等级：{value.level}</h2>
              </div>
            )
          }
        }
      </userContext.Consumer>
    </div>
  )  

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
