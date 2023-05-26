import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import AboutMePage from './AboutMePage';
import Header from './Header';
import UserPage from './UserPage';
import { Button } from 'react-bootstrap';

function App() {

  return (
    <>
      <Header/>
      <Button variant='primary' className='ms-5 mt-3'><Link className="text-decoration-none text-white" to="/">Назад</Link></Button>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/about-me' element={<AboutMePage/>} />
        <Route path='/user/:userId' element={<UserPage/>} />
      </Routes>
    </>
  );
}

export default App;
