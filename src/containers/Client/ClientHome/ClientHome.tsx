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
          <div className='row justify-content-between'>
            <div className='col col-md-6 mb-2'>
              {allDishes.length === 0 ? <h4>No Dishes yet</h4> :
                <>
                  <h2>Menu</h2>
                  {allDishes.map(dish => (
                    <div key={dish.id} className="card mb-3 p-4">
                      <div className="row justify-content-between">
                        <div className='col-5'>
                          <img src={dish.urlImage} alt="Pizza Image" style={{width: 150}} className="rounded"/>
                        </div>
                        <div className='col-6'>
                          <div>
                            <h4 className="card-title">{dish.title}</h4>
                            <div>
                              <p className='card-text'>{dish.price} $</p>
                            </div>
                            <div className='row justify-content-between row-cols-2'>
                              <button className="mt-3 btn btn-primary">Add to Cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              }
            </div>
            <div className='col col-md-5 mb-2'>
              <h2>Cart</h2>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default ClientHome;