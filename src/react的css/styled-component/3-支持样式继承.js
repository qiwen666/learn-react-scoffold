import React, { PureComponent } from 'react'
import styled from 'styled-components'

const HYButton = styled.button`
  padding: 8px 30px;
  border-radius: 5px;
`
const HYWarnButton = styled(HYButton)`
  background-color: red;
  color: #fff
`
const HYPrimaryButton = styled(HYButton)`
  background-color: green;
  color: #fff
`

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HYButton>我是普通按钮</HYButton>
        <HYWarnButton>我是警告按钮</HYWarnButton>
        <HYPrimaryButton>我是主要按钮</HYPrimaryButton>
      </div>
    )
  }
}
