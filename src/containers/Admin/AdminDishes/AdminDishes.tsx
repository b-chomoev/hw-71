import { NavLink } from 'react-router-dom';

const AdminDishes = () => {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>Dishes</h3>
        <NavLink to='/admin/new-dishes' className='btn btn-primary'>Add new Dish</NavLink>
      </div>
    </>
  );
};

export default AdminDishes;