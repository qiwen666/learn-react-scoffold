import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default class MenuList extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      menuList: [
        // { id: 1, title: '娃娃菜炖豆腐', price: 2 },
        // { id: 2, title: '香煎黄金鱼', price: 22 },
        // { id: 3, title: '香煎黄金鱼', price: 25 },
      ]
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.list.title}</h2>
        <ul className="menu-container">
          {
            this.props.list.list && this.props.list.list.map((item, index) => {
              return (
                <li key={item._id} className="menu-item">
                  <Link to={`/menuDetail/${item._id}`}>
                    <div>
                      <div className="imgCover">
                        <img src={`http://a.itying.com/${item.img_url}`} alt={item.title}/>
                      </div>
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
