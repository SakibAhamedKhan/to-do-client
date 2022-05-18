import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './pages/Login/RequireAuth';
import Profile from './pages/Dashboard/Profile';

function App() {
  return (
    <div className='max-w-6xl mx-auto'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }></Route>
        <Route path='profile' element={
          <RequireAuth>
            <Profile></Profile>
          </RequireAuth>
        }></Route>
      </Routes>


      <ToastContainer />
    </div>
  );
}

export default App;
