import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Shop } from './pages/Shop'
import { Navbar } from './components/Navbar'
import { Topbar } from './components/Topbar'
import { Footer } from './components/Footer'
import { ProductDetail } from './pages/shop/ProductDetail'
import FetchProduct from './data/FetchProduct'
import { SearchContextProvider } from './context/SearchContext'
import { SearchResult } from './components/SearchResult'
import { CategoryResult } from './components/CategoryResult'

function App() {
  const [token, setToken] = useState(localStorage.getItem('userToken') ?? null)
  const { data, loading, error } = FetchProduct('https://fakestoreapi.com/products')
    
    { loading && <div>Loading...</div> }
    { error && <div>Error: {error}</div> }

  return (
    <div className="App">
        <Router>
        <SearchContextProvider>
          <Topbar token={token} setToken={setToken} />
          <Navbar />
          <Routes>
            <Route path='/' index element={<Home token={token} data={data}/>} />
            <Route path='/login' element={<Login token={token} setToken={setToken} />} />
            <Route path='/shop' element={<Shop token={token} data={data}/>} />
            <Route path='/products/:pid' element={<ProductDetail token={token} />} />
            <Route path='/search/:query' element={<SearchResult />} />
            <Route path='/category/:category' element={<CategoryResult />} />
          </Routes>
          <Footer />
        </SearchContextProvider>
        </Router>
    </div>
  )
}

export default App
