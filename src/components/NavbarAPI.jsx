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
        if (!response.ok) throw new Error('HTTP ' + response.status)
        const data = await response.json()
        setCategorias(Array.isArray(data) ? data : [])
      } catch (err) {
        console.error(err)
        setError('Error al cargar categorías')
      } finally {
        setLoading(false)
      }
    }
    fetchCategorias()
  }, [])

  if (loading) return <div className="loading">Cargando categorías...</div>
  if (error) return <div className="error">{error}</div>

  // helpers
  const prettify = (s = '') =>
    s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

  const normalize = (item) => {
    // si viene como string: "mens-shoes"
    if (typeof item === 'string') {
      return { slug: item, name: prettify(item) }
    }
    // si viene como objeto: { slug: 'mens-shoes', name: 'Mens Shoes' }
    if (item && typeof item === 'object') {
      const slug = item.slug ?? (item.name ? item.name.toLowerCase().replace(/\s+/g, '-') : '')
      const name = item.name ?? prettify(slug)
      return { slug, name }
    }
    return { slug: '', name: 'Sin nombre' }
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
            {categorias.map((cat, i) => {
              const { slug, name } = normalize(cat)
              const key = slug || String(i)
              return (
                <Link key={key} to={`/productos/categoria/${encodeURIComponent(slug)}`}>
                  {name}
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