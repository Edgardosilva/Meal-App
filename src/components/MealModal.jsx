import React from 'react';

const MealModal = ({ clickedMeal, setModalOn, modalOn }) => {

  const ingredientKeys = Object.keys(clickedMeal).filter(
    key => key.startsWith('strIngredient') && clickedMeal[key]
  );

  return (
    <main className="absolute flex flex-col items-center justify-center w-full h-screen ">
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-80 backdrop-blur-sm"></div>
      <section className="relative w-[900px] h-[450px] bg-slate-200 flex justify-between text-gray-700 text-xl">
        <img
          src={clickedMeal.strMealThumb}
          className="w-[450px] h-[450px]"
          alt={clickedMeal.strMeal}
        />
        <div className="flex flex-col w-[450px] justify-between p-2 m-1 overflow-y-scroll">
          <h1 className="text-[1.8rem] text-center mb-4 font-bold">
            {clickedMeal.strMeal}
          </h1>
          <h1>Origin: {clickedMeal.strArea}</h1>
          <h1>Category: {clickedMeal.strCategory}</h1>
          <ul className="list-disc">
            <h3 className="mb-3">Ingredients:</h3>
            {ingredientKeys.map((ingredientKey, index) => (
              <li key={index} className="text-grey-300 ml-10 text-[1.1rem]">
                {clickedMeal[ingredientKey]} -{" "}
                {clickedMeal[`strMeasure${index + 1}`]}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-slate-400 z-0 w-[900px] h-[400px]">
        <h1 className='text-gray-700 text-xl font-bold'>Instructions</h1>
        <p>{clickedMeal.strInstructions}</p>
      </section>
    </main>
  );
};

export default MealModal;
