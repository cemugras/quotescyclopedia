import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './components/context/AppContext';
import Home from './components/home/Home';
import Authors from './components/authors/Authors';
import Topics from './components/topics/Topics';
import Author from './components/author/Author';
import Navbar from './components/navbar/Navbar';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/authors' element={<Authors />}></Route>
          <Route path='/author' element={<Author />}></Route>
          <Route path='/topics' element={<Topics />}></Route>
          <Route path='/' element={<Navigate to='/home' />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
