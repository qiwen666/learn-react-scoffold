import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  console.log(props, 'Product');
  return (
    <div>
      {props.title} - &#36;{props.price}
      {props.quantity ? ` x ${props.quantity}` : null}
    </div>
  );
};

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
};

export default Product;
