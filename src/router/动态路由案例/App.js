import React, { PureComponent } from 'react'
import MemuList from './MemuList'
import MemuDetail from './MemuDetail'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      item: {}
    }
  }
  componentDidMount() {
    this.getMenuList()
  }
  render() {
    const { item } = this.state
    return (
      <div>
        <Router>
          <MemuList list={item}/>
          <Route path="/menuDetail/:id" component={MemuDetail}/>
        </Router>
      </div>
    )
  }

  getMenuList() {
    axios.get('http://a.itying.com/api/productlist').then(res => {
      console.log(res);
      this.setState({
        item: res.data.result[0]
      })
    })
  }
}
