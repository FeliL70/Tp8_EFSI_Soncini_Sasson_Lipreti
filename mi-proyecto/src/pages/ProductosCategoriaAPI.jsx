import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function ProductosCategoriaAPI() {
  const { idCategoria } = useParams()
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProductosPorCategoria = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/category/${idCategoria}`)
        const data = await response.json()
        setProductos(data.products)
        setLoading(false)
      } catch (err) {
        setError('Error al cargar productos de esta categoría')
        setLoading(false)
      }
    }

    fetchProductosPorCategoria()
  }, [idCategoria])

  if (loading) return <div className="loading">Cargando productos...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div>
      <h1>Productos en {idCategoria.charAt(0).toUpperCase() + idCategoria.slice(1)}</h1>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.thumbnail} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p>${producto.price}</p>
            <Link to={`/productos/${producto.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductosCategoriaAPI
