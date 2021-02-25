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
  fetchData(id){
    const v_id = id
    axios.get(`http://a.itying.com/api/productcontent?id=${v_id}`).then(res => {
      this.setState({
        detail_list: {...res.data.result[0]}
      })
    })
  }
  /*
  componentWillReceiveProps方法已过时，
  建议使用getDerivedStateFromProps(nextProps, prevState)
  代替componentWillReceiveProps()。
  老版本中的componentWillReceiveProps()方法判断前后两个 props 是否相同，
  如果不同再将新的 props 更新到相应的 state 上去。
  这样做一来会破坏 state 数据的单一数据源，导致组件状态变得不可预测，
  另一方面也会增加组件的重绘次数。
  * */
  componentWillReceiveProps(next) {
  this.fetchData(next.match.params.id)
  }
  componentDidMount() {
    this.fetchData(this.props.match.params.id)
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
