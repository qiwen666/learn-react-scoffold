import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class ProductDetail extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      list: [
        { aid: 1, title: '商品列表111' },
        { aid: 2, title: '商品列表222' }
      ]
    }
  }
  // get传递参数：?xxx
  render() {
    return (
      <div>
        <h2>我是商品组件</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={item.aid}><Link to={`/ProductDetail?aid=${item.aid}`}>{item.title}</Link></li>
            })
          }
        </ul>
      </div>
    )
  }
}
