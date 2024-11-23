import { DishCart } from '../../types';
import React from 'react';

interface Props {
  cartDish: DishCart;
}

const CartItem: React.FC<Props> = ({cartDish}) => {
  return (
    <div className='card mb-3 p-2'>
      <div className='row align-items-center justify-content-between'>
        <div className='col-4'>{cartDish.dish.title}</div>
        <div className='col-3'>{cartDish.amount}</div>
        <div className='col-3'>{cartDish.dish.price} $</div>
        <button className='px-3 col-1 btn-close'></button>
      </div>
    </div>
  );
};

export default CartItem;