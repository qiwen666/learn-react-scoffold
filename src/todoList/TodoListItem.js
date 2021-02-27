import React, { PureComponent } from 'react';

export default class TodoListItem extends PureComponent {
  render() {
    const { item, removeItemClick, checkedItemClcik } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          value={item.checked}
          checked={item.checked}
          onChange={() => checkedItemClcik()}
        />
        <span style={{ margin: '0px 10px' }}>{item.title}</span>
        <button onClick={() => removeItemClick()}>删除</button>

      </div>
    );
  }

}
