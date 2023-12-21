import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { handleInputChange, handleSubmit, fetchData } from '../functions/searchFunctions';
import MealModal from "./MealModal";


const SearchComponent = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [modalOn, setModalOn] = useState(false)
  const [clickedMeal, setClickedMeal] = useState({})

  const showMealModal = (meal) => {
    setModalOn(!modalOn)
    setClickedMeal(meal)
    console.log(meal)
  }

  const handleInput = (e) => {
    handleInputChange(e, setSearchTerm);
  };

  const submitForm = (e) => {
    handleSubmit(e, setSearchTerm, setInputSearch, searchTerm);
  };

  useEffect(() => {
    fetchData(inputSearch, setLoader, setData, setLoader);
  }, [inputSearch]);


  return (
    <>
      <div className="flex items-center justify-center mt-12 flex-col">
        <div className="w-full max-w-md relative">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
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
        {loader ? (
          <Loader />
        ) : data && data.length > 0 ? (
          <div className="flex items-center justify-center w-full mt-14 p-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-h-[800px] overflow-y-auto">
              {data.map((meal, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-80 rounded-md shadow-md cursor-pointer hover:opacity-70"
                    onClick={() => showMealModal(meal)}
                  />
                  <h1 className="text-slate-600 mt-2">{meal.strMeal}</h1>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full mt-14">
            <h3 className="text-white text-xl">
              We couldn't find any preparations with {inputSearch}, try another
              one!
            </h3>
          </div>
        )}
      </div>
      {modalOn && 
       <MealModal 
        clickedMeal={clickedMeal}
        setModalOn={setModalOn}
        modalOn={modalOn}/>
      }
    </>
  );
};

export default SearchComponent;
