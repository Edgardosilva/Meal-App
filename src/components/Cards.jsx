import React from 'react';

const Cards = ({ showMealModal, data }) => {
    return (
    <div className="flex items-center justify-center w-full mt-5 p-5 animate-fade animate-duration-500">
        <div className="flex flex-wrap max-h-[500px] w-[1400px] overflow-y-scroll p-3 m-2 lg:max-h-[900px] md:max-h-[750px]">
          {data.map((meal, index) => (
            <div key={index} className=" m-2 flex flex-col items-center shadow-xl bg-mainColor-200 rounded-xl h-[200px] lg:h-[300px] w-[300px] bg-opacity-50 backdrop-blur-mg cursor-pointer transition-transform transition-box-shadow transform-gpu hover:scale-110 hover:shadow-lg ">
              <div className="rounded-xl h-[300px] w-[270px]  mt-[15px] overflow-hidden lg:h-[700px]">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="h-[220px] w-[270px] rounded-xl"
                  onClick={() => showMealModal(meal)}
                />
              </div>
              <div className="w-full h-full pl-4 flex flex-col justify-center">
                <h1 className="text-mainColor-900 font-bold text-[18px]">{meal.strMeal}</h1>
                <h2 className="italic">{meal.strArea} food</h2>
              </div>
            </div>
          ))}
        </div>
    </div>
    );
};

export default Cards;