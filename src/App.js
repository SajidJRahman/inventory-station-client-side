import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Authentications/Login/Login';
import SignUp from './Pages/Authentications/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import MyItems from './Pages/Services/MyItems/MyItems';
import Inventory from './Pages/Services/Inventory/Inventory';
import ManageInventory from './Pages/Services/ManageInventory/ManageInventory';
import RequireAuth from './Pages/Authentications/RequireAuth/RequireAuth';

const App = () => {
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
        <Route path='/my-items' element={<MyItems />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;