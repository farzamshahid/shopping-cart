import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/home'
import Cart from './pages/cart'
import Header from './components/header'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>
        <Route exact path='/cart' element={<Cart />}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
