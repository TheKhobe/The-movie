import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import Home from './pages/Home';
import Movies from './pages/Movies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
    <Routes> 
     <Route path='/' element={<Home />} />
    <Route path='/movie/:id' element={<Movies />} />

    </Routes>

    </Router>
  </>
);

