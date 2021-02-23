import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import Product from './Product'

export default class App extends PureComponent {
  render() {
    return (
      <div>
      <Router>
        <div>
          <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link>
          <Link to="/product">商品</Link>

          <br/>
          <Route path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/product" component={Product}/>
          <Route path="/productDetail" component={ProductDetail}/>
        </div>
      </Router>
      </div>
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

