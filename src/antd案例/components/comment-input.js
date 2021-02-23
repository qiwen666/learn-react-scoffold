import React, { PureComponent } from 'react'
import { Input, Button } from 'antd'
import moment from 'moment'

export default class HYCommentInput extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      areaValue: ''
    }
  }
  render() {
    return (
      <div>
        <Input.TextArea rows={4} onChange={e => this.getTextarea(e)} value={this.state.areaValue}/>
        <Button type="primary" onClick={e => this.submitComment()}>添加评论</Button>
      </div>
    )
  }

  getTextarea(event) {
    this.setState({
      areaValue: event.target.value
    })
  }

  submitComment() {
    const commentInfo = {
      id: Date.now(),
      name: 'kaeery',
      avatar: 'https://ask.qcloudimg.com/http-save/yehe-5441616/4b1zvwvvbp.jpeg?imageView2/2/w/160',
      content: this.state.areaValue,
      datetime: moment()
    }

    const { submitComment } = this.props
    submitComment(commentInfo)

    this.setState({
      areaValue: ''
    })
  }
}
