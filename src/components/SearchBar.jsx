import React, { useState } from 'react';

const SearchBar = ({onSearch}) => {

  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => onSearch(inputValue)}>Cerca</button>
    </>
  );
};

export default SearchBar;
