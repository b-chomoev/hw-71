import { DishCart } from '../../../types';
import React from 'react';
import CartItem from '../CartItem';

interface Props {
  cart: DishCart[];
}

const CartDishes: React.FC<Props> = ({cart}) => {
  const total = cart.reduce((acc, cartDish) => {
    acc = acc + cartDish.dish.price * cartDish.amount;
    return acc;
  }, 0);

  let cartList = (
    <div className='alert alert-success' role='alert'>
      <h6 className='text-center my-4'>No pizza added yet. Add something ... </h6>
    </div>
  );

  if (cart.length > 0) {
    cartList = (
      <div>
        {cart.map(cartDish => (
          <CartItem key={cartDish.dish.id} cartDish={cartDish}/>
        ))}
        <hr/>

        <div className='row row-cols-2 align-items-center justify-content-between px-3'>
          <div className='text-start p-0'><strong>Total: </strong></div>
          <div className='text-end p-0'>{total} USD</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='row mt-2'>
        {cartList}
      </div>
    </div>
  );
};

export default CartDishes;