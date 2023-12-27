import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import {
  handleInputChange,
  handleSubmit,
  fetchData,
} from "../functions/searchFunctions";
import MealModal from "./MealModal";
import Cards from "./Cards";
import SearchBar from "./SearchBar";
import NotResults from "./NotResults";

const SearchComponent = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [modalOn, setModalOn] = useState(false);
  const [clickedMeal, setClickedMeal] = useState({});

  const showMealModal = (meal) => {
    setModalOn(!modalOn);
    setClickedMeal(meal);
    console.log(meal);
  };

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
      <div className="flex items-center justify-center mt-12 flex-col ">
        <SearchBar
          handleInput={handleInput}
          searchTerm={searchTerm}
          submitForm={submitForm}
        />
        {loader ? (
          <Loader />
        ) : data && data.length > 0 ? (
          <Cards showMealModal={showMealModal} data={data} />
        ) : (
          <NotResults inputSearch={inputSearch} />
        )}
      </div>
      {modalOn && (
        <MealModal
          clickedMeal={clickedMeal}
          setModalOn={setModalOn}
          modalOn={modalOn}
        />
      )}
    </>
  );
};

export default SearchComponent;
