import { useParams } from 'react-router-dom'

function ProductoDetalle() {
  const { idProducto } = useParams()

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <p>ID del producto: {idProducto}</p>
      <p>Aquí se mostrará la información detallada del producto seleccionado.</p>
    </div>
  )
}

export default ProductoDetalle
