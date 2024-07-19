const SearchBar = ({ onSearch }) => (
    <div className="search-bar">
      <input type="text" placeholder="Buscar receitas..." onChange={e => onSearch(e.target.value)} />
    </div>
  );
  
  export default SearchBar;
  