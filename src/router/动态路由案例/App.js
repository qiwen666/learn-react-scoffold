import React, { PureComponent } from 'react'
import MemuList from './MemuList'
import MemuDetail from './MemuDetail'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

  }
  render() {
    return (
        <Router>
          <div>
            <Route path="/" component={MemuList}/>
            
            <Route path="/menuDetail/:id" exact component={MemuDetail}/>
          </div>
          
        </Router>
    )
  }

}
