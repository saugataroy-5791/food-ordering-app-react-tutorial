
const Search = (props) => {
   const { searchText, onSearchTextChanged, onSearchButtonClicked } = props;

   return (
      <div className="search">
         <input type="text" id="search" value={searchText} className="search-box border rounded border-black py-2 px-4 mr-4 text-sm" placeholder="Search..." onChange={onSearchTextChanged} />
         <button type="button" className="search-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onSearchButtonClicked}>Search</button>
      </div>
   )
}

export default Search;
