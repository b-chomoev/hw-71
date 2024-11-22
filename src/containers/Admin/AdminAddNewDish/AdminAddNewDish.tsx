import DishForm from '../../../components/DishForm/DishForm';
import { ApiDish } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectAddDishLoading } from '../../../store/slices/dishSlice';
import { useNavigate } from 'react-router-dom';
import { addNewDish } from '../../../store/thunks/dishThunks';
import { toast } from 'react-toastify';

const AdminAddNewDish = () => {
  const dispatch = useAppDispatch();
  const addLoading = useAppSelector(selectAddDishLoading);
  const navigate = useNavigate();

  const addDish = async (dish: ApiDish) => {
    await dispatch(addNewDish({...dish}));
    navigate('/admin/dishes');
    toast.success("Dish was added successfully");
  };

  return (
    <div  className='mb-2'>
      <DishForm addNewDish={addDish} isLoading={addLoading} />
    </div>
  );
};

export default AdminAddNewDish;