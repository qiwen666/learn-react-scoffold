import React, { PureComponent } from 'react'

export default class MemuDetail extends PureComponent {
  constructor(props) {
    super(props)


  }
  componentDidMount() {
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        菜单详情
      </div>
    )
  }
}
