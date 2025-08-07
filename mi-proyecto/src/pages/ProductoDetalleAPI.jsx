import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductoDetalleAPI() {
  const { idProducto } = useParams()
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${idProducto}`)
        const data = await response.json()
        setProducto(data)
        setLoading(false)
      } catch (err) {
        setError('Error al cargar el producto')
        setLoading(false)
      }
    }

    fetchProducto()
  }, [idProducto])

  if (loading) return <div className="loading">Cargando producto...</div>
  if (error) return <div className="error">{error}</div>
  if (!producto) return <div className="error">Producto no encontrado</div>

  return (
    <div className="producto-detalle">
      <h1>{producto.title}</h1>
      <div className="producto-info">
        <img src={producto.thumbnail} alt={producto.title} />
        <div>
          <p><strong>Precio:</strong> ${producto.price}</p>
          <p><strong>Categoría:</strong> {producto.category}</p>
          <p><strong>Marca:</strong> {producto.brand}</p>
          <p><strong>Descripción:</strong> {producto.description}</p>
          <p><strong>Stock:</strong> {producto.stock} unidades</p>
          <p><strong>Rating:</strong> {producto.rating} </p>
        </div>
      </div>
      <div className="producto-imagenes">
        <h3>Imágenes del producto:</h3>
        <div className="imagenes-grid">
          {producto.images.map((img, index) => (
            <img key={index} src={img} alt={`${producto.title} ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductoDetalleAPI
