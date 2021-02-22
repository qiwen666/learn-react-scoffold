import React, { PureComponent } from 'react'
import styled from 'styled-components'

const AppWrapper = styled.div`
  color: purple;

  h2 {
    font-size: 50px
  }
`

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AppWrapper>
          <h2>我是App标题</h2>
          <ul>
            <li>我是列表1</li>
            <li>我是列表2</li>
            <li>我是列表3</li>
          </ul>
        </AppWrapper>
      </div>
    )
  }
}
