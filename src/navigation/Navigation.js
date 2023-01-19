import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Cart from '../pages/Cart/Cart'
import PaymentSuccess from '../pages/PaymentSuccess/PaymentSuccess'
import Register from '../pages/Register/Register'
import Menu from '../pages/menu/Menu'

function Navigation() {
  return (
    <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/register" element={ <Register/> } />
          <Route path="/menu" element={ <Menu/> } />
          <Route path="/cart" element={ <Cart/> } />
          <Route path="/payment-success" element={ <PaymentSuccess/> } />
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation;