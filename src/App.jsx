import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Shop } from './pages/Shop'
import { Cart } from './pages/Cart'
import { Wishlist } from './pages/Wishlist'
import { Contact } from './pages/Contact'
import { ProductDetail } from './pages/shop/ProductDetail'
import { Navbar } from './components/Navbar'
import { Topbar } from './components/Topbar'
import { Footer } from './components/Footer'
import { SearchResult } from './components/SearchResult'
import { CategoryResult } from './components/CategoryResult'
import { SearchContextProvider } from './context/SearchContext'
import { ShopContextProvider } from './context/ShopContext'
import FetchProduct from './data/FetchProduct'
import { BackToTop } from './components/BackToTop'

function App() {
  const [token, setToken] = useState(localStorage.getItem('userToken') ?? null)
  const { data, loading, error } = FetchProduct('https://fakestoreapi.com/products')
    
    { loading && <div>Loading...</div> }
    { error && <div>Error: {error}</div> }

  return (
    <div className="App">
        <Router>
          <ShopContextProvider>
            <SearchContextProvider>
              <Topbar token={token} setToken={setToken} />
              <Navbar />
              <Routes>
                <Route path='/' index element={<Home token={token} data={data}/>} />
                <Route path='/login' element={<Login token={token} setToken={setToken} />} />
                <Route path='/shop' element={<Shop token={token} data={data}/>} />
                <Route path='/cart' element={<Cart data={data}/>} />
                <Route path='/wishlist' element={<Wishlist data={data}/>} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/products/:pid' element={<ProductDetail token={token} />} />
                <Route path='/search/:query' element={<SearchResult token={token}/>} />
                <Route path='/category/:category' element={<CategoryResult token={token}/>} />
              </Routes>
              <Footer />
              <BackToTop />
            </SearchContextProvider>
          </ShopContextProvider>
        </Router>
    </div>
  )
}

export default App
