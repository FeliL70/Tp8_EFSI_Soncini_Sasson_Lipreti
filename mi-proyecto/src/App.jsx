import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import QuienesSomos from './pages/QuienesSomos'
import ProductosAPI from './pages/ProductosAPI'
import ProductoDetalleAPI from './pages/ProductoDetalleAPI'
import ProductosCategoriaAPI from './pages/ProductosCategoriaAPI'
import Contacto from './pages/Contacto'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="productos" element={<ProductosAPI />} />
        <Route path="productos/categoria/:idCategoria" element={<ProductosCategoriaAPI />} />
        <Route path="productos/:idProducto" element={<ProductoDetalleAPI />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  )
}

export default App
