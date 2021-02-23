import React, { PureComponent } from 'react'
import MemuList from './MemuList'
import MemuDetail from './MemuDetail'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Router>
          <MemuList/>
          <Route path="/menuDetail/:id" component={MemuDetail}/>
        </Router>
      </div>
    )
  }
}
