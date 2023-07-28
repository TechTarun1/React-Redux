import React from 'react';
import { useDispatch } from 'react-redux';

import './Products.css';
import { addToCart } from '../../store/actions/CartActions';
import { productData } from '../../data/Data';
import { CartItem } from '../../types/StoreType';

const Products = () => {

  const dispatch = useDispatch();

  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart(item));
  };

  return (
    <div className='products'>
      {productData.map((product: CartItem) => {

        return (
          <div className='card' key={product.id}>
            <div>
              <img
                className='product-image'
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className='d-flex flex-column align-items-center'>
              <div>
                <h3 className='product-name'>{product.name}</h3>
              </div>
              <div className='product-price'>${product.price}</div>
            </div>
            <div>
              <button className='product-add-button' onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Products
