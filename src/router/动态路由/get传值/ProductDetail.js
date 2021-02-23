import React, { PureComponent } from 'react'
import url from 'url'

export default class ProductDetail extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      getParams: ''
    }
  }
  componentDidMount() {
    console.log(this.props);
    console.log(this.props.location.search);
    console.log(url.parse(this.props.location.search, true)); //query:aid: "2"
    let query = url.parse(this.props.location.search, true).query.aid
    console.log(query);
    this.setState({
      getParams: query
    })
  }
  render() {
    return (
      <div>
        <h2>我是商品详情组件，当前商品aid是：{this.props.location.search}</h2>
        <h2>我是商品详情组件，当前商品aid是：{this.state.getParams}</h2>
      </div>
    )
  }
}
