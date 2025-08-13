import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [categorias, setCategorias] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const data = [
          { id: 1, nombre: 'Electrónica' },
          { id: 2, nombre: 'Ropa' },
          { id: 3, nombre: 'Hogar' },
          { id: 4, nombre: 'Deportes' },
          { id: 5, nombre: 'Libros' }
        ]

        console.log('Categorías cargadas:', data)
        setCategorias(data)
        setLoading(false)
      } catch (err) {
        setError('Error al cargar categorías')
        setLoading(false)
      }
    }

    fetchCategorias()
  }, [])

  if (loading) return <div className="loading">Cargando...</div>
  if (error) return <div className="error">{error}</div>

  const getNombreCategoria = (nombre) => {
    if (typeof nombre === 'string') return nombre
    if (typeof nombre === 'object' && nombre !== null) {
      const firstKey = Object.keys(nombre)[0]
      return nombre[firstKey] || 'Sin nombre'
    }
    return 'Sin nombre'
  }

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quienes-somos">Quienes Somos</Link></li>
        <li className="dropdown">
          <Link to="/productos">Productos</Link>
          <div className="dropdown-content">
            <Link to="/productos">Ver todos</Link>
            {categorias.map((categoria) => (
              <Link 
                key={categoria.id} 
                to={`/productos/categoria/${categoria.id}`}
              >
                {getNombreCategoria(categoria.nombre)}
              </Link>
            ))}
          </div>
        </li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar