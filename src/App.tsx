import React from 'react';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/cadastro'element={<Cadastro/>}/>
      </Routes>
        <Footer />
    </Router>

  );
}

export default App;
