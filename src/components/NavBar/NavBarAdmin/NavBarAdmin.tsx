import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBarAdmin = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-primary'>
        <div className='container'>
          <NavLink to='/admin' className='text-decoration-none'><span
            className='navbar-brand mb-0 text-white fs-1'>Papa John's Admin</span></NavLink>

          <div className='ms-auto'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/admin/dishes'>Dishes</NavLink>
                <NavLink className='nav-link' to='/admin/orders'>Orders</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarAdmin;