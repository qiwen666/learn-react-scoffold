import React, { PureComponent } from 'react'
import TodoListItem from './TodoListItem'

export default class TodoList extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      textValue: '',
      list: [],
    }
  }
  componentDidMount() {
    let localData = JSON.parse(localStorage.getItem("list"))
    if(localData) {
      this.setState({
        list: localData
      })  
    }
  }
  render() {
    return (
      <div>
        <h2>待做事项列表</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" onChange={e => this.saveInput(e)} value={this.state.textValue} />
          <input type="submit" value="添加" />
        </form>
        <hr />
        <h3>待做事项</h3>
        <TodoListItem 
          list={this.state.list} 
          removeItemClick={index => this.removeItem(index)}
          checkedItemClcik={index => this.handleChange(index)}
        />
        <hr/>
        <h3>已完成事项</h3>
        <div>
          <ul>
            {
              this.state.list.map((item,index) => {
                if(item.checked) {
                  return (
                    <li key={item.id}>
                      <input type="checkbox" checked={item.checked} onChange={() => this.handleChange(index)}/>
                      <span style={{margin: '0px 10px'}}>{item.title}</span>
                      <button onClick={e => this.removeItem(index)}>删除</button>
                    </li>
                  )  

                }
              })
            }
          </ul>
        </div>
      </div>
    )
  }
  // 获取文本内容
  saveInput(event) {
    this.setState({
      textValue: event.target.value
    })
  }
  // 添加待事项
  handleSubmit(event) {
    event.preventDefault()
    if (!this.state.textValue) return
    this.setState({
      list: [...this.state.list, { title: this.state.textValue, id: Date.now(), checked: false }],
      textValue: ''
    })  
    localStorage.setItem("list",JSON.stringify([...this.state.list, { title: this.state.textValue, id: Date.now(), checked: false }]))
  }

  // 删除任务项
  removeItem(index) {
    const newItem = [...this.state.list]
    newItem.splice(index, 1)
    this.setState({
      list: newItem
    })
  }

  // 已完成任务事项
  handleChange(index) {
    const checkItem = [...this.state.list]
    checkItem[index].checked = !checkItem[index].checked
    this.setState({
      list: checkItem,
    })
  }
}
