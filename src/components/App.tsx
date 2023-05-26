import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import AboutMePage from './AboutMePage';
import Header from './Header';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/about-me' element={<AboutMePage/>} />
      </Routes>
    </>
  );
}

export default App;
