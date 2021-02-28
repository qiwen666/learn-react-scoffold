import React, { PureComponent } from 'react';
import { connect } from '../utils/connect';
import { addAction } from '../store/actionCreators';

function Home(props) {
  return (
    <div>
      Home
      <h2>当前计数：{props.counter}</h2>
      <button onClick={(e) => props.decrement(5)}>+1</button>
      <button onClick={(e) => props.addNumber(5)}>-1</button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
const mapStateToProps = state => ({
  counter: state.counter,
})

// const mapDispatchToProps = (dispatch) => {
//   return {
//     decrement: function (num) {
//       dispatch(addAction(num));
//     },
//   };
// };

const mapDispatchToProps = dispatch => ({
  decrement: function (num) {
    dispatch(addAction(num));
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(Home);
