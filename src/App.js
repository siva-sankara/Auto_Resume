import React from 'react';

import Landingpage from './Landingpage';
import { Route,  Routes } from 'react-router-dom';
import Login from './comp/login/Login';
import Register from './comp/register/Register';
import ForgotPassword from './comp/forgotpassword/ForgotPassword';
import Dashboard from './comp/Dashboard/Dashboard';






function App() {
  return (
    <div className="">
     <Routes>
      <Route path='/' element={<Landingpage />}/>
      <Route path='/signin' element={<Login />}/>
      <Route path='/signup' element={<Register />}/>
      <Route path='/api/v1/resetpassword/:id' element={<ForgotPassword />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
     </Routes>
    </div>
  );
}

export default App;
