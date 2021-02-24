import React, { PureComponent } from 'react'
import axios from 'axios'

export default class MemuDetail extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      detail_list: {}
    }

  }
  componentDidMount() {
    console.log(this.props.match.params.id);
    const v_id = this.props.match.params.id
    axios.get(`http://a.itying.com/api/productcontent?id=${v_id}`).then(res => {
      console.log(res);
      this.setState({
        detail_list: res.data.result[0]
      })
    })
  }
  render() {
    return (
      <div>
        菜单详情
      </div>
    )
  }
}
