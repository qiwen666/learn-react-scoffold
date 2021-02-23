import React, { PureComponent } from 'react'

export default class Content extends PureComponent {

  componentDidMount() {
    console.log(this.props); //Object isExact:true params:Object aid:"2"
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h2>我是新闻详情组件，当前id值为：{this.props.match.params.id}</h2>
      </div>
    )
  }
}
