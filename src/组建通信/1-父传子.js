import React, { Component } from 'react'

// 子组件是类组件
class ChildCpn1 extends Component {
  constructor(props) {
    super(props)

    // this.props = props
  }
  render() {
    const { name, age, height } = this.props
    return (
      <div>
        <h2>我是类组件</h2>
        <p>展示父组件传过来的数据：{name + " " + age + " " + height}</p>
      </div>
    )
  }
}

// 子组件是函数式组件
function ChildCpn2(props) {
  const { name, age, height } = props
  return (
    <div>
      <h2>我是函数式组件</h2>
      <p>展示父组件传过来的数据：{name + " " + age + " " +height}</p>
    </div>
  )

}
export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn1 name="why" age="18" height="1.88"/>
        <ChildCpn2 name="kaeery" age="22" height="1.7"/>
      </div>
    )
  }
}
