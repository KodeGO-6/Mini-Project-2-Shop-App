import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Shop } from './pages/Shop'
import { Navbar } from './components/Navbar'
import { Topbar } from './components/Topbar'

function App() {
  const [token, setToken] = useState(localStorage.getItem('userToken') ?? null)

  return (
    <div className="App">
      <Router>
        <Topbar token={token} setToken={setToken} />
        <Navbar />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/login' element={<Login token={token} setToken={setToken} />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
