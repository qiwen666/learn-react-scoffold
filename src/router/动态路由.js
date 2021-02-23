import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/netflix">Netflix</Link>
              </li>
              <li>
                <Link to="zillow-group">Zillow Group</Link>
              </li>
              <li>
                <Link to="/yahoo">Yahoo</Link>
              </li> 
              <li> 
                <Link to="/modus-create">Modus Create</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/:id" children={<Child/>}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

function Child() {
  let { id } = useParams()

  return (
    <div>
      <h3>ID：{id}</h3>
    </div>
  )
}