import './SearchInput.scss';
import search from './images/search.svg'


function SearchInput(props) {
  return <div className="SearchInput">
    <div className="inputWrapper">
      <input 
        type="text" 
        placeholder="Inserisci classe, materia o nome del docente" 
        value={searchText}
        onChange={({ target }) => setSearchText(target.value)}
        />
      <img src={search} alt="Search" />
    </div>
  </div>
}

export default SearchInput;