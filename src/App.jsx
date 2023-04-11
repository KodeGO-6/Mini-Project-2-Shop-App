import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Topbar } from './components/Topbar'
import { UserLogin } from './components/UserLogin'
import { Index } from './pages/index/Index'
import { Shop } from './pages/shop/Shop'
import { Cart } from './pages/cart/Cart'
import { Contact } from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import { ProductDetail } from './pages/shop/product/ProductDetail'

function App() {

  return (
    <div className="App">
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
    </div>
  )
}

export default App
