import React, { PureComponent } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// 基本路由
// <Router>
//   <Link to="/">Home</Link>
//   <Link to="/about">About</Link>
//   <Link to="/users">Users</Link>
//   <Route path="/about" component={<About/>}>
//   <Route path="/users" component={<Profile />}>
//   <Route path="/" componen={<Home />}>
// </Router>

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link>

          <br/>
          {/* exact：严格匹配 */}
          <Route  path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/profile" component={Profile}/>
        </div>
      </Router>
    )
  }
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Profile() {
  return <h2>Profile</h2>
}
