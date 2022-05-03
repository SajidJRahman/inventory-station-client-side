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
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import AddItems from './Pages/Products/AddItems/AddItems';
import ManageItems from './Pages/Products/ManageItems/ManageItems';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/inventory' element={
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
        {
          user &&
          <>
            <Route path='/my-items' element={<MyItems />} />
            <Route path='/add-items' element={<AddItems />} />
            <Route path='/manage-items' element={<ManageItems />} />
          </>
        }
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;