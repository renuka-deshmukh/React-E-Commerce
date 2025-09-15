import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import products from './Data'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import ProductInfo from './pages/ProductInfo'
import { ThemeProvider } from './Context/ThemeProvider'
import Navbar from './components/Navbar'
import { AuthProvider } from './Context/AuthProvider'
import { CartProvider } from './Context/CartContext.jsx';
import Cart from './components/Cart'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [isRegistered, setIsRegister] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <ThemeProvider >
        <BrowserRouter>
        <AuthProvider>
          <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<LoginPage setIsLoggedIn = {setIsLoggedIn} />} ></Route>
            <Route path='/register' element={<RegisterPage setIsRegister={setIsRegister} />}></Route>
            <Route path='/dashboard' element={<Dashboard products={products} />}></Route>
            <Route path='/dashboard/:ID/*' exact element={<ProductInfo />}></Route> 
            <Route path='/cart' element={<Cart />}></Route>  
            <Route path="/about" element={<About />} ></Route>            
          </Routes>
          <Footer />  
          </CartProvider>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>



      {/* {isRegistered ? (<LoginPage />) : (<RegisterPage setIsRegister={setIsRegister} />)} */}
      {/* <RegisterPage />
      <LoginPage /> */}
      {/* 
      <Dashboard products={products}/> */}





    </>
  )
}

export default App