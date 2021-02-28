import React from 'react'
import Product from './Product'
import PropTypes from 'prop-types'

const ProductItem = (props) => (
  <div>
    <Product 
      title={props.title}
      price={props.price}
      quantity={props.quantity}
    />
    <button>
      Add to cart
    </button>
  </div>
)

ProductItem.propTypes = {

}

export default ProductItem