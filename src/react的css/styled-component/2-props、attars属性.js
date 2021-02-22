import React, { PureComponent } from 'react'
import styled from 'styled-components'

// const UNInput = styled.input`
//   border-color: red;

//   &:focus {
//     outline-color: orange;
//   }

//   color: ${props => props.color}
// `

const HYInput = styled.input.attrs({
  placeholder: "请填写密码",
  paddingLeft: props => props.left || "5px"
})`
  border-color: red;
  padding-left: ${props => props.paddingLeft};

  &:focus {
    outline-color: orange;
  }
`

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HYInput type="password" left="10px"></HYInput>
        <input type="submit" value="提交"/>        
      </div>
    )
  }
}
