import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import HomeClient from './containers/HomeClient/HomeClient';
import AdminHome from './containers/Admin/AdminHome/AdminHome';
import AdminDishes from './containers/Admin/AdminDishes/AdminDishes';
import AdminEditDishes from './containers/Admin/AdminEditDishes/AdminEditDishes';
import AdminOrders from './containers/Admin/AdminOrders/AdminOrders';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomeClient/>} />
          <Route path='/admin' element={<AdminHome/>} />
          <Route path='/admin/dishes' element={<AdminDishes/>} />
          <Route path='/admin/edit-dishes' element={<AdminEditDishes/>} />
          <Route path='/admin/orders' element={<AdminOrders/>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
