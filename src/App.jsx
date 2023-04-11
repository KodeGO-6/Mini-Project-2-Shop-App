import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Topbar } from './components/Topbar'
import { UserLogin } from './components/UserLogin'
import { Index } from './pages/index/Index'
import { Shop } from './pages/shop/Shop'
import { Cart } from './pages/cart/Cart'
import { Contact } from './pages/Contact'
import { ProductDetail } from './pages/shop/product/ProductDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ShopContextProvider } from './context/ShopContext'


function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Topbar />
          <Navbar />
          <Routes>
            <Route path='/' index element={<Index />} />
            <Route path='/user' element={<UserLogin />} />
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
