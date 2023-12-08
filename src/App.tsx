import React from 'react';
import Login from './components/login';
import Register from './components/register';
import Logout from './components/logout';
import Home from './components/home';
import  { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Login/>
    <Register/>
    <Logout/>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};


export default App;
