import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Topbar } from './components/Topbar'
import { Index } from './pages/index/Index'
import { Shop } from './pages/shop/Shop'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Routes>
        <Route path='/' index element={<Index />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
