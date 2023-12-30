import React from 'react';

const SearchBar = ({ handleInput, searchTerm, submitForm }) => {
    return (
      <div className="w-full relative p-4 lg:w-[500px]">
        <label
          className="block text-mainColor-600 text-xl font-bold mb-4 text-[25px]"
          htmlFor="search"
        >
          Search by ingredient, example: chicken
        </label>
        <div className="relative">
          <form onSubmit={submitForm}>
            <input
              type="text"
              id="search"
              placeholder="Ingrese el texto de búsqueda"
              value={searchTerm}
              onChange={handleInput}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </form>
        </div>
      </div>
    );
};

export default SearchBar;