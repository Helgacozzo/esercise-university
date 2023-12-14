import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import UniversityList from './components/UniversityList';

function App() {

  const [universities, setUniversities] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {

    const fetchUniversities = async () => {

      try {
        const response = await fetch('http://universities.hipolabs.com/search?country=Italy');
        const data = await response.json();

        const universityList = data.map((university) => ({
          name: university.name,
          url: university.web_pages[0] || '',
        }));

        setUniversities(universityList);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchUniversities();
  }, []);

  return (
    <>
      <SearchBar onSearch={(value) => setSearchValue(value)} />
      <UniversityList list={universities} research={searchValue} />
    </>
  );
}

export default App;
