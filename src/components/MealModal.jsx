import React from 'react';

const MealModal = ({ clickedMeal, setModalOn, modalOn }) => {

  const goToVideo = () => {
    window.open(clickedMeal.strYoutube, '_blank')
  }

  const ingredientKeys = Object.keys(clickedMeal).filter(
    key => key.startsWith('strIngredient') && clickedMeal[key]
  );

  return (
    <main className="absolute flex flex-col items-center justify-center w-full h-screen ">
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-80 backdrop-blur-sm"></div>
      <section className="z-0 flex">
        <article className="rounded pr-2">
          <img
            src={clickedMeal.strMealThumb}
            className="w-[450px] h-[450px] rounded-xl"
            alt={clickedMeal.strMeal}
          />
        </article>
        <section className="relative w-[450px] h-[450px] bg-mainColor-200 flex justify-between text-gray-700 text-xl rounded-xl">
          <article className="flex flex-col w-[450px] p-5 m-1 overflow-y-scroll">
            <h1 className="text-[1.8rem] mb-4 font-bold text-mainColor-600">
              {clickedMeal.strMeal}
            </h1>
            <h1 className='font-bold text-[19px] italic'>Origin: {clickedMeal.strArea}</h1>
            <h1 className='font-bold text-[19px] italic'>Category: {clickedMeal.strCategory}</h1>
            <ul className="list-disc">
              <h3 className="mb-3 font-bold text-[19px] mt-3">Ingredients:</h3>
              {ingredientKeys.map((ingredientKey, index) => (
                <li key={index} className="text-grey-300 ml-10 text-[1.1rem]">
                  {clickedMeal[ingredientKey]} -{" "}
                  {clickedMeal[`strMeasure${index + 1}`]}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </section>
      <section className="flex flex-col justify-between bg-gradient-to-r from-mainColor-300 to-mainColor-500 z-0 w-[900px] h-[340px] p-6 m-2 rounded-xl">
        <h1 className="text-[1.8rem] font-bold text-mainColor-600">Instructions</h1>
        <div className='overflow-y-scroll h-[150px]'>{clickedMeal.strInstructions}</div>
        <article>
          <button onClick={() => setModalOn(!modalOn)} className="bg-mainColor-400 p-2 rounded w-20 hover:bg-mainColor-300">
            Close
          </button>
          <button className=" bg-mainColor-400 p-2 rounded ml-4 w-30 hover:bg-mainColor-300" onClick={goToVideo}>
            Watch Video
          </button>
        </article>
      </section>
    </main>
  );
};

export default MealModal;
