import React, { PureComponent } from 'react'
import styles from './App.module.css'

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h2 className={styles.title}>我是App标题</h2>
        <p>我是App中的一段文字</p>
      </div>
    )
  }
}
