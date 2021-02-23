import React, { PureComponent } from 'react'

export default class TodoListItem extends PureComponent {
  render() {
    const { list, removeItemClick, checkedItemClcik, isComplete } = this.props
    return (
      <div>
        {
          list.map((item,index) => {
            return (
              <div key={item.id}>
                <input type="checkbox" value={item.checked} onChange={() => checkedItemClcik(index)}/>
                <span style={{margin: '0px 10px'}}>{item.title}</span>
                <button onClick={() => removeItemClick(index)}>删除</button>
              </div>
            )  
          })
        }
      </div>
    )
  }
}
