import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectEditDishLoading, selectOneDish, selectOneDishFetchLoading } from '../../../store/slices/dishSlice';
import { useCallback, useEffect } from 'react';
import { editDish, getOneDishById } from '../../../store/thunks/dishThunks';
import Spinner from '../../../components/UI/Spinner/Spinner';
import DishForm from '../../../components/DishForm/DishForm';
import { IDish } from '../../../types';
import { toast } from 'react-toastify';

const AdminEditDishes = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const dish = useAppSelector(selectOneDish);
  const fetchLoading = useAppSelector(selectOneDishFetchLoading);
  const editDishLoading = useAppSelector(selectEditDishLoading);

  const getDishById = useCallback(async () => {
    if (id) {
      dispatch(getOneDishById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    void getDishById();
  }, [getDishById]);

  const edit = async (dish: IDish) => {
    if (id) {
      await dispatch(editDish({dishId: id, dish}));
      navigate('/admin/dishes');
      toast.success("Dish was edited successfully");
    }
  };

  return (
    <>
      {fetchLoading ? <Spinner /> :
        <>
          {dish ? <DishForm addNewDish={edit} existingDish={dish} isEdit={true} isLoading={editDishLoading} /> : navigate('/admin/dishes')}
        </>
      }
    </>
  );
};

export default AdminEditDishes;