
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BarraNav from './components/BarraNav'
import Home from './views/Home'
import DetallePizza from './views/DetallePizza'
import CarroCompras from './views/CarroCompras'

function App() {
 

  return (
    <>
      <BarraNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pizza/:id' element={<DetallePizza/>}/>
        <Route path='/carrito' element={<CarroCompras/>} />
      </Routes>
    </>
  )
}

export default App
