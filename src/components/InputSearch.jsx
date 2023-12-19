import React, { useEffect, useState } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchTerm)
    setSearchTerm('')
  }

  return (
    <div className="flex items-center justify-center mt-12">
      <div className="w-full max-w-md relative">
        <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="search">
            Search by ingredient, example: chicken
        </label>
        <div className="relative">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="search"
              placeholder="Ingrese el texto de búsqueda"
              value={searchTerm}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
