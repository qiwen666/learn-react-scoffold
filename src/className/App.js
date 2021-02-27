import React, { PureComponent } from 'react';
import classNames from 'classnames';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }
  render() {
    const { isActive } = this.state;
    const isBar = true;
    const errClass = 'error';
    return (
      <div>
        {/* 原生react添加class方法 */}
        <h2 className="active title">我是标题一</h2>
        <h2 className={'title ' + (isActive ? 'active' : '')}>我是标题二</h2>
        <h2 className={['title', 'active'].join(' ')}>我是标题三</h2>

        {/* classnames库添加class */}
        <h2 className={classNames('foo', 'bar', 'active', 'title')}>
          我是标题四
        </h2>
        <h2 className={classNames({ active: isActive, bar: isBar }, 'title')}>
          我是标题四
        </h2>
        <h2 className={classNames('foo', errClass, { active: isBar })}>
          我是标题四
        </h2>
        <h2 className={classNames(['active', 'foo'])}>我是标题五</h2>
        <h2 className={classNames(['active', { bar: isBar }])}>我是标题五</h2>
      </div>
    );
  }
}
