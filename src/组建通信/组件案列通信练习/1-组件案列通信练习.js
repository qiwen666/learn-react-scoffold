import React, { Component } from 'react'
import './style.css'

class TabControl extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }

  }
  render() {
    const { tabItems } = this.props
    return (
      <div>
        <ul className="tab">
          {
            tabItems.map((item,index) => {
              return (
                <li className="tab-item" key={index} onClick={e => this.itemClick(index)}>
                  <span className={this.state.currentIndex === index ? 'active' : ''}>{item}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  itemClick(index) {
    this.setState({
      currentIndex: index
    })
    const { itemClick } = this.props
    itemClick(index)
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.tabItems = ["流行", "新款", "精选"]

    this.state = {
      currentTitle: '流行'
    }
  }
  render() {
    return (
      <div>
        <TabControl tabItems={this.tabItems} itemClick={ index => this.changeItem(index)}/>
        <h2>{this.state.currentTitle}</h2>
      </div>
    )
  }

  changeItem(index) {
    this.setState({
      currentTitle: this.tabItems[index]
    })
  }
}
