import React from 'react';

const UniversityList = ({ list, research }) => {

  return (

    <>

      {list
        .filter((university) => university.name.toLowerCase().includes(research.toLowerCase()))
        .map((university) => (
          <div key={university.name}>
            <h5>{university.name}</h5>
            <p>{university.url}</p>
          </div>
        ))}

    </>

  );
  
};

export default UniversityList;
