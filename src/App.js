import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import Images from './Images/Images';
import SignUp from './Shared/SignUp/SignUp';
import Navbar from './Shared/Navbar/Navbar';
import Home from './Home/Home';
import Login from './Shared/Login/Login';
import Registration from './Shared/Registration/Registration';
import Dashboard from './Dashboard/Dashboard';
import RequireAuth from './Shared/RequireAuth';
import MyProfile from './Dashboard/MyProfile';
import AllUsers from './Dashboard/AllUsers';
import Payment from './Dashboard/Payment';
import StyleComponents from './StyleComponent/StyleComponents';

function App() {
  return (
    <div className="App">
      {/* <Images></Images> */}
      {/* <SignUp></SignUp> */}
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/images' element={<Images></Images>}></Route>
        <Route path='/styleComponents' element={<StyleComponents></StyleComponents>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>

        {/* Dashboard...... */}
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='allUsers' element={<AllUsers></AllUsers>}></Route>
          {/* <Route path='payment' element={<Payment></Payment>}></Route> */}
          <Route path='payment/:paymentId' element={<Payment></Payment>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
