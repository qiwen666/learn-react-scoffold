import React, { PureComponent } from 'react';

export default class CartList extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      cartList: []
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>商品名称</th>
              <th>价格</th>
              <th>数量</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.cartList.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <button>-</button>
                      <span>{item.amount}</span>
                      <button>+</button>
                    </td>
                  </tr>
                )
              })
            }
            {/* <tr>
              <td>1</td>
              <td>苹果</td>
              <td>8888</td>
              <td>10</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}
