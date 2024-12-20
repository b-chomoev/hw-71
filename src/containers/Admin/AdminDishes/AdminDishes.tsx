import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectAllDishes, selectDeleteDishLoading, selectFetchingDishesLoading } from '../../../store/slices/dishSlice';
import { useCallback, useEffect } from 'react';
import { deleteDishById, fetchingAllDishes } from '../../../store/thunks/dishThunks';
import Spinner from '../../../components/UI/Spinner/Spinner';

const AdminDishes = () => {
  const dispatch = useAppDispatch();
  const allDishes = useAppSelector(selectAllDishes);
  const fetchLoading = useAppSelector(selectFetchingDishesLoading);
  const deleteLoading = useAppSelector(selectDeleteDishLoading);

  const fetchDishes = useCallback(async () => {
    await dispatch(fetchingAllDishes());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === '/admin/dishes') {
      void fetchDishes();
    }
  }, [fetchDishes]);

  const deleteDish = async (id: string | undefined) => {
    if (id) {
      await dispatch(deleteDishById(id));
    }

    await fetchDishes();
  };

  return (
    <div>
      {fetchLoading || deleteLoading ? <Spinner/> :
        <>
          {allDishes.length === 0 ? <h4>No Dishes yet</h4> :
            <>
              <div className='d-flex justify-content-between align-items-center'>
                <h3>Dishes</h3>
                <NavLink to='/admin/new-dishes' className='btn btn-primary'>Add new Dish</NavLink>
              </div>
              {allDishes.map(dish => (
                <div key={dish.id} className="mt-3 border border-1 border-primary rounded-3 p-1 mb-3 w-50 mx-auto d-flex align-items-center">
                  <div><img src={dish.urlImage} alt="Pizza Image" style={{width: 150}} className='rounded' /></div>
                  <div className='d-flex justify-content-between align-items-center text-center'>
                    <div>
                      <h4 className="ps-3">{dish.title}</h4>
                      <div>
                        <p>{dish.price} $</p>
                      </div>
                    </div>
                    <div className='ms-5 row'>
                      <button className='btn btn-danger mb-2' onClick={() => deleteDish(dish.id)}>Delete</button>
                      <NavLink to={`/admin/dishes/edit-dish/${dish.id}`} className='btn btn-primary'>Edit</NavLink>
                    </div>
                  </div>

                </div>
              ))}
            </>
          }
        </>
      }
    </div>
  );
};

export default AdminDishes;