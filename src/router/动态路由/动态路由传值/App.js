import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from './Content'
import News from './News'

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Link to="/news">新闻</Link>
          <br/>

          <Route path="/news" component={News}/>
          {/* 新闻详情页 */}
          <Route path="/:id" component={Content}/>
        </div>
      </Router>
    )
  }
}

