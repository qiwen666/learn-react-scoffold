import React, { PureComponent } from 'react'
import HYCommentInput from './components/comment-input'
import HYCommentItem from './components/comment-item'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      commentList: []
    }
  }
  render() {
    return (
      <div>
        {
          this.state.commentList.map((item, index) => {
            return (
              <HYCommentItem 
                key={item.id}
                comment={item}
                index={index}
                removeItem={e => this.removeItem(index)}
              />
            )
          })
        }
        <HYCommentInput submitComment={commentList => this.submitComment(commentList)}/>
      </div>
    )
  }

  // 提交评论
  submitComment(commentList) {
    this.setState({
      commentList: [...this.state.commentList, commentList]
    })
  }

  // 删除评论项
  removeItem(index) {
    const newCommentList = [...this.state.commentList]
    newCommentList.splice(index,1)
    this.setState({
      commentList: newCommentList
    })
  }
}
