import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Authentications/Login/Login';
import SignUp from './Pages/Authentications/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import MyItems from './Pages/Products/MyItems/MyItems';
import Inventory from './Pages/Products/Inventory/Inventory';
import ManageInventory from './Pages/Products/ManageInventory/ManageInventory';
import RequireAuth from './Pages/Authentications/RequireAuth/RequireAuth';
import AddItems from './Pages/Products/AddItems/AddItems';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path='/manage-inventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        } />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />
        <Route path='/add-items' element={
          <RequireAuth>
            <AddItems />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;