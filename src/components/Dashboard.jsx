function Dashboard({ productos }) {
  // Calcular estadísticas
  const totalProductos = productos.length;
  const totalUnidades = productos.reduce((sum, p) => sum + p.stock, 0);
  const stockBajo = productos.filter(p => p.stock > 0 && p.stock <= 5).length;
  const agotados = productos.filter(p => p.stock === 0).length;

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <div className="icon">🍰</div>
        <h3>Total Productos</h3>
        <p>{totalProductos}</p>
      </div>
      
      <div className="dashboard-card">
        <div className="icon">📦</div>
        <h3>Unidades en Stock</h3>
        <p>{totalUnidades}</p>
      </div>
      
      <div className="dashboard-card">
        <div className="icon">⚠️</div>
        <h3>Stock Bajo (≤5)</h3>
        <p>{stockBajo}</p>
      </div>
      
      <div className="dashboard-card">
        <div className="icon">❌</div>
        <h3>Productos Agotados</h3>
        <p>{agotados}</p>
      </div>
    </div>
  );
}

export default Dashboard;