import { useState } from 'react';

function ProductForm({ onAgregarProducto }) {
  const [producto, setProducto] = useState({
    nombre: '',
    categoria: 'Bebidas Calientes',
    precio: '',
    stock: '',
    imagen: '☕'
  });

  const categorias = ['Bebidas Calientes', 'Bebidas Frías', 'Pastelería', 'Snacks'];
  const emojis = ['☕', '🥤', '🍰', '🥐', '🍪', '🧁', '🍩'];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!producto.nombre.trim()) {
      alert('Por favor ingresa el nombre del producto');
      return;
    }
    
    if (!producto.precio || producto.precio <= 0) {
      alert('Ingresa un precio válido');
      return;
    }
    
    if (producto.stock === '' || producto.stock < 0) {
      alert('Ingresa un stock válido');
      return;
    }
    
    const nuevoProducto = {
      ...producto,
      id: Date.now(),
      precio: parseFloat(producto.precio),
      stock: parseInt(producto.stock)
    };
    
    onAgregarProducto(nuevoProducto);
    
    // Resetear formulario
    setProducto({
      nombre: '',
      categoria: 'Bebidas Calientes',
      precio: '',
      stock: '',
      imagen: '☕'
    });
  };

  return (
    <div className="form-container">
      <h2>➕ Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            type="text"
            placeholder="Nombre del producto"
            value={producto.nombre}
            onChange={(e) => setProducto({...producto, nombre: e.target.value})}
          />
          
          <select
            value={producto.categoria}
            onChange={(e) => setProducto({...producto, categoria: e.target.value})}
          >
            {categorias.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          
          <input
            type="number"
            step="0.01"
            placeholder="Precio (€)"
            value={producto.precio}
            onChange={(e) => setProducto({...producto, precio: e.target.value})}
          />
          
          <input
            type="number"
            placeholder="Stock"
            value={producto.stock}
            onChange={(e) => setProducto({...producto, stock: e.target.value})}
          />
          
          <select
            value={producto.imagen}
            onChange={(e) => setProducto({...producto, imagen: e.target.value})}
          >
            {emojis.map(emoji => (
              <option key={emoji}>{emoji}</option>
            ))}
          </select>
          
          <button type="submit" className="btn-agregar">
            ➕ Agregar Producto
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;