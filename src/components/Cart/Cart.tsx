import { useState } from 'react';
import Modal from '../UI/Modal/Modal';
import { useNavigate } from 'react-router-dom';
import CartDishes from './CartDishes/CartDishes';
import { useAppSelector } from '../../app/hooks';
import { selectCartDishes } from '../../store/slices/cartSlice';

const Cart = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const cartDishes = useAppSelector(selectCartDishes);

  return (
    <div>
      <Modal show={showModal} closeModal={() => setShowModal(false)} title="Order" defaultModalBtn={false}>
        <div className="modal-body">
          <div>
            <CartDishes cart={cartDishes}/>
          </div>
        </div>
        <div className="text-end">
          <button className="btn btn-dark" onClick={() => navigate('/checkout')}>Order</button>
          <button className="btn btn-dark" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </Modal>

      <CartDishes cart={cartDishes} />
      {cartDishes.length > 0 ?
        <div className='text-center'>
          <button className='btn btn-primary' onClick={() => setShowModal(true)}>Order</button>
        </div> : null
      }
    </div>
  );
};

export default Cart;