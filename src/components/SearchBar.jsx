function SearchBar({ busqueda, onBusquedaChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍 Buscar por nombre o categoría..."
        value={busqueda}
        onChange={(e) => onBusquedaChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;