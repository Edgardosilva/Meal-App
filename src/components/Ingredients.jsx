import React from "react";

const Ingredients = ({ ingredientKeys, clickedMeal }) => {
  return (
    <ul className="list-disc mb-4">
      <h3 className="mb-3 font-bold text-[19px]">Ingredients:</h3>
      {ingredientKeys.map((ingredientKey, index) => (
        <li key={index} className="text-grey-300 ml-10 text-[15px]">
          {clickedMeal[ingredientKey]} - {clickedMeal[`strMeasure${index + 1}`]}
        </li>
      ))}
    </ul>
  );
};

export default Ingredients;
