import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function NavbarAPI() {
  const [categorias, setCategorias] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories')
        const data = await response.json()
        setCategorias(data)
        setLoading(false)
      } catch (err) {
        setError('Error al cargar categorías')
        setLoading(false)
      }
    }

    fetchCategorias()
  }, [])

  if (loading) return <div className="loading">Cargando categorías...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quienes-somos">Quienes Somos</Link></li>
        <li className="dropdown">
          <Link to="/productos">Productos</Link>
          <div className="dropdown-content">
            <Link to="/productos">Ver todos</Link>
            {categorias.map((categoria) => {
              const categoriaStr = String(categoria)
              const nombreFormateado = categoriaStr.charAt(0).toUpperCase() + categoriaStr.slice(1)
              return (
                <Link 
                  key={categoriaStr} 
                  to={`/productos/categoria/${categoriaStr}`}
                >
                  {nombreFormateado}
                </Link>
              )
            })}
          </div>
        </li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default NavbarAPI
