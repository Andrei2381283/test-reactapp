import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import AboutMePage from './AboutMePage';

function App() {

  return (
    <>
      <header>
        <Link to="/">Main</Link>
        <Link to="/about-me">About me</Link>
      </header>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/about-me' element={<AboutMePage/>} />
      </Routes>
    </>
  );
}

export default App;
