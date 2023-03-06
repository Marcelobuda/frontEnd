import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';

import UsuarioCadastro from './paginas/cadastro/UsuarioCadastro';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/home'element={<Home />}/>
        <Route path='/login'element={<Login />}/>
        <Route path='/cadastro'element={<UsuarioCadastro />}/>
      </Routes>
        <Footer />
    </Router>

  );
}

export default App;
