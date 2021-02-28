import React, { PureComponent } from 'react';
import { increment, decrement } from '../actions/index';
import store from '../store';

export default class CartList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cartList: [],
    };
  }
  getState = () => {
    this.setState({
      cartList: store.getState().cart.cartList
    })
  }

  componentDidMount() {
    this.getState()
    this.unsubscribe = store.subscribe(this.getState)
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
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
            {this.state.cartList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        store.dispatch(decrement(item.id));
                      }}
                    >
                      -
                    </button>
                    <span>{item.amount}</span>
                    <button
                      onClick={() => {
                        store.dispatch(increment(item.id));
                      }}
                    >
                      +
                    </button>
                  </td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

}
