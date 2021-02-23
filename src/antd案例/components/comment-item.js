import React, { PureComponent } from 'react'
import { Comment, Tooltip, Avatar } from 'antd'

export default class HYCommentItem extends PureComponent {
  render() {
    const { comment } = this.props

    return (
      <div>
        <Comment
          actions={this.getActions()}
          author={<a>{comment.name}</a>}
          // 头像
          avatar={
            <Avatar
              src={comment.avatar}
              alt={comment.name}
            />
          }
          // 内容
          content={<p>{comment.content}</p>}
          datetime={
            <Tooltip title={comment.datetime.format('YYYY-MM-DD HH:mm:ss')}>
              <span>{comment.datetime.fromNow()}</span>
            </Tooltip>
          }
        />     
     </div>
    )
  }

  getActions() {
    return [
      <span onClick={this.props.removeItem}>删除</span>
    ]
  }
}
