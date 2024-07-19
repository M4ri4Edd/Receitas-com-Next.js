const FilterBar = ({ onFilterChange }) => (
    <div className="filter-bar">
      <label>
        Categoria:
        <select onChange={e => onFilterChange(e.target.value)}>
          <option value="">Todas</option>
          <option value="sobremesa">Sobremesas</option>
          <option value="prato-principal">Pratos Principais</option>
        </select>
      </label>
    </div>
  );
  
  export default FilterBar;
  