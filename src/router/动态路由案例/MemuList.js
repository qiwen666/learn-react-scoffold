import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default class MenuList extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      menuList: [
        { id: 1, title: '娃娃菜炖豆腐', price: 2 },
        { id: 2, title: '香煎黄金鱼', price: 22 },
        { id: 3, title: '香煎黄金鱼', price: 25 },
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>精选热菜</h2>
        <ul className="menu-container">
          {
            this.state.menuList.map((item, index) => {
              return (
                <li key={item.id} className="menu-item">
                  <Link to={`/menuDetail/${item.id}`}>
                    <div>
                      <div className="imgCover"></div>
                      <div className="content">
                        <p>{item.title}</p>
                        <p>{item.price + '元'}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
