import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './style.css'

export default class MenuList extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      item: {}
    }
  }
  componentDidMount() {
    this.getMenuList()
  }
  render() {
    const { title, list } = this.state.item
    return (
      <div>
        <h2>{title}</h2>
        <ul className="menu-container">
          {
            list && list.map((item, index) => {
              return (
                <li key={item._id} className="menu-item">
                  <Link to={`/menuDetail/${item._id}` } >
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
  getMenuList() {
    axios.get('http://a.itying.com/api/productlist').then(res => {
      console.log(res);
      this.setState({
        item: res.data.result[0]
      })
    })
  }

}
