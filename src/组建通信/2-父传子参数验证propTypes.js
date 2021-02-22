import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChildCpn1 extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { name, age, height, hobby } = this.props
    return (
      <div>
        <h2>我是类组件</h2>
        <p>展示父组件传过来的数据：{name + " " + age + " " + height + " " + hobby }</p>
      </div>
    )
  }
}
// 对于父组件传过来的数据进行验证
ChildCpn1.propTypes = {
  name: PropTypes.string.isRequired, //字符串(必填)
  age: PropTypes.number, //数字
  height: PropTypes.number, //数字
  hobby: PropTypes.array //数组
}

// 指定默认值
ChildCpn1.defaultProps = {
  age: 20,
  height: 1.8
}
  

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn1 name="why" age={18} height={1.88} hobby={["吃饭","睡觉"]}/>
        <ChildCpn1 age={18} height={1.88} hobby={["吃饭","睡觉"]}/>
        <ChildCpn1 hobby={["吃饭","睡觉"]}/>
      </div>
    )
  }
}
