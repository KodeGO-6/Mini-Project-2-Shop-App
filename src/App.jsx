import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Topbar } from './components/Topbar'
import { UserLogin } from './pages/user/UserLogin'
import { Index } from './pages/index/Index'
import { Shop } from './pages/shop/Shop'
import { Cart } from './pages/cart/Cart'
import { Contact } from './pages/Contact'
import { ProductDetail } from './pages/shop/product/ProductDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ShopContextProvider } from './context/ShopContext'
import { useState } from 'react'


function App() {
  const [token, setToken] = useState(localStorage.getItem('userToken') ?? null)

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Topbar />
          <Navbar />
          <Routes>
            <Route path='/' index element={<Index />} />
            <Route path='/user' element={<UserLogin token={token} setToken={setToken} />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/products/:pid' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
