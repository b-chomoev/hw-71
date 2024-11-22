import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectAllDishes, selectFetchingDishesLoading } from '../../../store/slices/dishSlice';
import { useCallback, useEffect } from 'react';
import { fetchingAllDishes } from '../../../store/thunks/dishThunks';
import Spinner from '../../../components/UI/Spinner/Spinner';

const ClientHome = () => {
  const dispatch = useAppDispatch();
  const allDishes = useAppSelector(selectAllDishes);
  const fetchLoading = useAppSelector(selectFetchingDishesLoading);

  const fetchDishes = useCallback(async () => {
    await dispatch(fetchingAllDishes());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchDishes();
    }
  }, [fetchDishes]);

  return (
    <>
      {fetchLoading ? <Spinner/> :
        <>
          {allDishes.length === 0 ? <h4>No Dishes yet</h4> :
            <>
              <div className='d-flex justify-content-between align-items-center'>
                <h3>Dishes</h3>
              </div>
              {allDishes.map(dish => (
                <div key={dish.id} className="mt-3 border border-1 border-primary rounded-3 p-1 mb-3 w-50 mx-auto d-flex justify-content-evenly align-items-center">
                  <div><img src={dish.urlImage} alt="Pizza Image" style={{width: 150}} className='rounded' /></div>
                  <div className='d-flex justify-content-between align-items-center text-center'>
                    <div>
                      <h4 className="ps-3">{dish.title}</h4>
                      <div>
                        <p>{dish.price} $</p>
                        <button className='btn btn-primary'>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          }
        </>
      }
    </>
  );
};

export default ClientHome;