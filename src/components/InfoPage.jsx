function InfoPage() {
  return (
    <div style={{
      maxWidth: "800px",
      margin: "0 auto",
      background: "white",
      borderRadius: "15px",
      padding: "30px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ color: "#4a2c1a", textAlign: "center", marginBottom: "20px" }}>
        ☕ Sobre este proyecto 🍰
      </h1>
      
      <div style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
        <h2 style={{ color: "#4a2c1a", marginTop: "20px" }}>🎯 Objetivo</h2>
        <p>Sistema de inventario diseñado especialmente para cafeterías y pastelerías, permitiendo gestionar productos, stock y ventas de manera sencilla y eficiente.</p>
        
        <h2 style={{ color: "#4a2c1a", marginTop: "20px" }}>✨ Características</h2>
        <ul>
          <li>📊 Dashboard con estadísticas en tiempo real</li>
          <li>➕ Agregar nuevos productos fácilmente</li>
          <li>✏️ Editar cantidades con botones +1 / -1</li>
          <li>🗑️ Eliminar productos del inventario</li>
          <li>🔍 Búsqueda por nombre o categoría</li>
          <li>🎨 Indicadores visuales de stock (verde, amarillo, rojo)</li>
          <li>📱 Diseño responsive para móviles y tablets</li>
        </ul>
        
        <h2 style={{ color: "#4a2c1a", marginTop: "20px" }}>🛠️ Tecnologías</h2>
        <ul>
          <li>⚡ React 18 + Vite</li>
          <li>🎨 CSS3 con Flexbox y Grid</li>
          <li>📦 Hooks: useState</li>
        </ul>
        
        <h2 style={{ color: "#4a2c1a", marginTop: "20px" }}>👨‍💻 Desarrollador</h2>
        <p>Proyecto creado por Emily Rocio Coaquira Castillo</p>
        <p>Materia: INF 133 PROGRAMACION WEB 3</p>
        <p>Proyecto creado como parte del aprendizaje de React. Demuestra conceptos fundamentales como componentes funcionales, manejo de estado, formularios controlados y eventos.</p>
        
        <h2 style={{ color: "#4a2c1a", marginTop: "20px" }}>📞 Contacto</h2>
        <p>📧 Email: tu-email@ejemplo.com</p>
      </div>
      
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <a 
          href="/" 
          style={{
            background: "#4a2c1a",
            color: "white",
            textDecoration: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            display: "inline-block"
          }}
        >
          ← Volver al inventario
        </a>
      </div>
    </div>
  );
}

export default InfoPage;