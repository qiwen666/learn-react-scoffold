import React, { PureComponent } from 'react'
import axios from 'axios'
import getImageSize from './utils'


export default class MemuDetail extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      detail_list: {}
    }

  }

  getImageSize(url,size) {
    return `http://a.itying.com/${url}?param=${size}`
  }
  
  componentDidMount() {
    const v_id = this.props.match.params.id
    axios.get(`http://a.itying.com/api/productcontent?id=${v_id}`).then(res => {
      this.setState({
        detail_list: {...res.data.result[0]}
      })
    })
  }
  render() {
    const { detail_list } = this.state
    console.log(this.state.detail_list,'详情页数据');
    return (
      <div>
        <div className="menu-title">
          <div className="img-container">
            <img src={this.getImageSize(detail_list.img_url,'500y200')} alt=""/>
          </div>
          <div className="content">
            <p>{detail_list.title}</p>
            <span>{detail_list.price + '元'}</span>
          </div>
        </div>
        <div className="menu-detail">
          <p>商品详情</p>
          <div dangerouslySetInnerHTML={{__html:detail_list.content}}></div>
        </div>
      </div>
    )
  }

}
