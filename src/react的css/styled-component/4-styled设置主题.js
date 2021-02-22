import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'

function  Home(props) {
  return (
      <h2>我是Home组件</h2>
  )
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2>我是Profile组件</h2>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <ThemeProvider theme={{color: 'red',fontSize: '30px'}}>
          <Home />
          <Profile/>
        </ThemeProvider>
      </div>
    )
  }
}
