import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import AboutMePage from './AboutMePage';
import Header from './Header';
import UserPage from './UserPage';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/about-me' element={<AboutMePage/>} />
        <Route path='/user/:userId' element={<UserPage/>} />
      </Routes>
    </>
  );
}

export default App;
