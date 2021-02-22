import React, { PureComponent } from 'react'
import HYCommentInput from './components/comment-input'


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
        <HYCommentInput submitComment={commentList => this.submitComment(commentList)}/>
      </div>
    )
  }

  submitComment(commentList) {
    // console.log(commentList);
    // const newData = {...commentList}
    // this.state.commentList.push(newData)
    // this.setState({
    //   commentList: this.state.commentList
    // })

    this.setState({
      commentList: [...this.state.commentList, commentList]
    })
  }
}
