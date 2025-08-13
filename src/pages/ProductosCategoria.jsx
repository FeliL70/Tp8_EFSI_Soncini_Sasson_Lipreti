import { useParams } from 'react-router-dom'

function ProductosCategoria() {
  const { idCategoria } = useParams()

  return (
    <div>
      <h1>Productos por Categoría</h1>
      <p>Categoría ID: {idCategoria}</p>
      <p>Aquí se mostrarán todos los productos de la categoría seleccionada.</p>
    </div>
  )
}

export default ProductosCategoria
