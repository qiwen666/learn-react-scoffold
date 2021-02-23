import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class News extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      list: [
        { aid: 1, title: '新闻列表111' },
        { aid: 2, title: '新闻列表222' }
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>我是新闻组件</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}><Link to={`/${item.aid}`}>{item.title}</Link></li>
            })
          }
        </ul>
      </div>
    )
  }
}
