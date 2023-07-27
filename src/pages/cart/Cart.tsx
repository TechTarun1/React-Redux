import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Cart.css';
import { addToCart, removeFromCart, clearCart } from '../../store/actions/CartActions';

const Cart = () => {

  const cartItems: any[] = useSelector((state: any) => state.cart.items)

  const totalPrice = cartItems.reduce(
    (price: number, item: any) => price + item.quantity * item.price,
    0
  );

  const dispatch = useDispatch();

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  const handleRemoveProduct = (item: any) => {
    dispatch(removeFromCart(item));
  };

  const handleCartClearance = () => {
    dispatch(clearCart());
  };

  return (
    <div className='cart-items'>
      <div className="cart-items-header">Cart Items</div>
      <div className="clear-cart">
        {cartItems.length > 1 && (
          <button className='clear-cart-button' onClick={() => handleCartClearance()}>Clear Cart</button>
        )}
      </div>
      {cartItems.length === 0 && <div className='cart-items-empty'>No items in Cart.</div>}
      <div>
        {cartItems.map((item: any) => {

          return (
            <div key={item.id} className='cart-items-list'>
              <img
                src={item.image}
                alt={item.name}
                className='cart-items-image'
              />
              <div className='cart-items-name'>{item.name}</div>
              <div className='cart-items-function'>
                <button className='cart-items-add' onClick={() => handleAddToCart(item)}>+</button>
                <span style={{ marginRight: 18 }}>{item.quantity}</span>
                <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
              </div>
              <div className='cart-items-price'>{item.quantity}* ${item.price}</div>
            </div>
          )
        })}
      </div>
      <div className='cart-items-total-price-name'>
        Total Price
        <div className='cart-items-total-price'>
          ${totalPrice}
        </div>
      </div>
    </div>
  )
}

export default Cart
