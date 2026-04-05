function ProductList({ productos, onEliminar, onEditarStock }) {
  
  const getStockClass = (stock) => {
    if (stock === 0) return "stock-agotado";
    if (stock <= 5) return "stock-bajo";
    return "stock-normal";
  };

  const getStockText = (stock) => {
    if (stock === 0) return "Agotado";
    if (stock <= 5) return "Stock bajo";
    return "En stock";
  };

  return (
    <div className="table-container">
      <h2 style={{ marginBottom: "20px", color: "#4a2c1a" }}>📋 Lista de Productos</h2>
      
      {productos.length === 0 ? (
        <p style={{ textAlign: "center", padding: "40px", color: "#999" }}>
          No hay productos. ¡Agrega algunos!
        </p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(producto => (
              <tr key={producto.id}>
                <td style={{ fontSize: "2rem" }}>{producto.imagen}</td>
                <td><strong>{producto.nombre}</strong></td>
                <td>{producto.categoria}</td>
                <td>€{producto.precio.toFixed(2)}</td>
                <td>
                  <span className={getStockClass(producto.stock)}>
                    {producto.stock}
                  </span>
                </td>
                <td>
                  <span style={{ fontWeight: "bold" }}>
                    {getStockText(producto.stock)}
                  </span>
                </td>
                <td>
                  <button 
                    className="btn-incrementar"
                    onClick={() => onEditarStock(producto.id, producto.stock + 1)}
                  >
                    +1
                  </button>
                  <button 
                    className="btn-decrementar"
                    onClick={() => onEditarStock(producto.id, producto.stock - 1)}
                    disabled={producto.stock === 0}
                  >
                    -1
                  </button>
                  <button 
                    className="btn-eliminar"
                    onClick={() => onEliminar(producto.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;