import { useState } from "react";

const Search = (props) => {
   const { searchText, onSearchTextChanged, onSearchButtonClicked } = props;

   return (
      <div className="search">
         <input type="text" id="search" value={searchText} className="search-box" placeholder="Search..." onChange={onSearchTextChanged} />
         <button type="button" className="search-button" onClick={onSearchButtonClicked}>Search</button>
      </div>
   )
}

export default Search;
