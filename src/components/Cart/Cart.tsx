import { useState } from 'react';
import Modal from '../UI/Modal/Modal';
import CartDishes from './CartDishes/CartDishes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearCart, selectCartDishes, selectOrder } from '../../store/slices/cartSlice';
import { orderPizza } from '../../store/thunks/cartThunks';

const Cart = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const cartDishes = useAppSelector(selectCartDishes);
  const dispatch = useAppDispatch();
  const order = useAppSelector(selectOrder);

  return (
    <div>
      <Modal show={showModal} closeModal={() => setShowModal(false)} title="Order" defaultModalBtn={false}>
        <div className="modal-body">
          <div>
            <CartDishes cart={cartDishes}/>
          </div>
        </div>
        <div className="text-end">
          <button className="btn btn-primary me-3" onClick={() => {setShowModal(false); dispatch(clearCart()); dispatch(orderPizza(order));}}>Order</button>
          <button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </Modal>

      <CartDishes cart={cartDishes} />
      {cartDishes.length > 0 ?
        <div className='text-center'>
          <button className='btn btn-primary' onClick={() => setShowModal(true)}>Continue</button>
        </div> : null
      }
    </div>
  );
};

export default Cart;