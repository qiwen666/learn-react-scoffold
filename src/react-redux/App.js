import React, { PureComponent } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Home2 from './pages/Home2'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <hr/>
        <About/>
        <hr/>
        <Home2/>
        <hr/>
      </div>
    )
  }
}
