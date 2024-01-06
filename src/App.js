import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/login/Login';
import Signup from './components/pages/login/Signup';
import Main from './components/pages/Homepage';
import Headder from './Layout/Headder';
import Footer from './Layout/Footer';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Main />} />
        <Route path="/headder" element={<Headder />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;

