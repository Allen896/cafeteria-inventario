import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import InfoPage from './components/InfoPage';
import { initialProducts } from './data/products';
import './styles/global.css';

function App() {
  const [productos, setProductos] = useState(() => {
    // Cargar productos guardados en localStorage
    const productosGuardados = localStorage.getItem('productos-cafeteria');
    if (productosGuardados) {
      return JSON.parse(productosGuardados);
    }
    // Si no hay productos guardados, usar los datos iniciales
    return initialProducts;
  });
  
  const [busqueda, setBusqueda] = useState('');
  const [paginaActual, setPaginaActual] = useState('inventario');

  // Guardar productos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('productos-cafeteria', JSON.stringify(productos));
  }, [productos]);

  // Filtrar productos por búsqueda
  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Agregar producto
  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  // Eliminar producto
  const eliminarProducto = (id) => {
    if (confirm('¿Seguro que quieres eliminar este producto?')) {
      setProductos(productos.filter(p => p.id !== id));
    }
  };

  // Editar stock
  const editarStock = (id, nuevoStock) => {
    if (nuevoStock < 0) return;
    setProductos(productos.map(p =>
      p.id === id ? { ...p, stock: nuevoStock } : p
    ));
  };

  // Si está en la página de información, mostrar InfoPage
  if (paginaActual === 'info') {
    return <InfoPage />;
  }

  // Si no, mostrar el inventario
  return (
    <div className="app">
      <h1>
        <span>☕</span>
        Inventario Cafetería & Pastelería
        <span>🍰</span>
      </h1>
      
      <Dashboard productos={productosFiltrados} />
      <ProductForm onAgregarProducto={agregarProducto} />
      <SearchBar busqueda={busqueda} onBusquedaChange={setBusqueda} />
      <ProductList 
        productos={productosFiltrados}
        onEliminar={eliminarProducto}
        onEditarStock={editarStock}
      />
      
      {/* Footer con redes sociales */}
      <footer style={{
        marginTop: "40px",
        padding: "20px",
        background: "#4a2c1a",
        borderRadius: "15px",
        textAlign: "center",
        color: "white"
      }}>
        <p style={{ marginBottom: "10px" }}>
          🧁 Desarrollado con ❤️ para amantes del café y los pasteles 🥐
        </p>
        
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}>
          <a 
            href="https://github.com/EmiliRocio" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "8px 15px",
              background: "#6b3e1f",
              borderRadius: "8px",
              transition: "background 0.3s"
            }}
            onMouseEnter={(e) => e.target.style.background = "#8b5a2b"}
            onMouseLeave={(e) => e.target.style.background = "#6b3e1f"}
          >
            🐙 GitHub
          </a>
          
          <a 
            href="https://www.facebook.com/emiliros.coaquira?locale=es_LA" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "8px 15px",
              background: "#6b3e1f",
              borderRadius: "8px",
              transition: "background 0.3s"
            }}
            onMouseEnter={(e) => e.target.style.background = "#8b5a2b"}
            onMouseLeave={(e) => e.target.style.background = "#6b3e1f"}
          >
            📘 Facebook
          </a>
          
          <a 
            href="https://web.telegram.org/a/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "8px 15px",
              background: "#6b3e1f",
              borderRadius: "8px",
              transition: "background 0.3s"
            }}
            onMouseEnter={(e) => e.target.style.background = "#8b5a2b"}
            onMouseLeave={(e) => e.target.style.background = "#6b3e1f"}
          >
            📨 Telegram
          </a>
          
          <button 
            onClick={() => setPaginaActual('info')}
            style={{
              color: "white",
              textDecoration: "none",
              padding: "8px 15px",
              background: "#6b3e1f",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.3s"
            }}
            onMouseEnter={(e) => e.target.style.background = "#8b5a2b"}
            onMouseLeave={(e) => e.target.style.background = "#6b3e1f"}
          >
            ℹ️ Acerca de
          </button>
        </div>
        
        <p style={{ marginTop: "15px", fontSize: "0.8rem", opacity: "0.8" }}>
          © 2026 - Inventario Cafetería & Pastelería | Versión 1.0
        </p>
      </footer>
    </div>
  );
}

export default App;