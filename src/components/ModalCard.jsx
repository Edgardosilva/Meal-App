import React from 'react';
import Instructions from './Instructions';
import Ingredients from './Ingredients';

const ModalCard = ({ clickedMeal, ingredientKeys, setModalOn, modalOn, goToVideo, hight }) => {
    return (
      <section
        className={`overflow-y-scroll relative flex flex-col h-[650px] bg-gradient-to-r from-mainColor-100 to-mainColor-300 text-gray-700 text-xl rounded-xl lg:w-[450px] lg:h-[450px] `}
      >
        <article className="flex flex-col p-5 m-1 items-center lg:items-start">
          <h1 className="text-center text-[1.8rem] mb-1 font-bold text-mainColor-600 lg:text-left">
            {clickedMeal.strMeal}
          </h1>
          <div className="h-[220px] w-[200px]flex justify-center items-center lg:hidden ">
            <img
              src={clickedMeal.strMealThumb}
              className="h-[180px] w-[220px] rounded-xl mt-3 sm:block lg:hidden shadow-lg lg:w-[450px] lg:h-[450px]"
              alt={clickedMeal.strMeal}
            />
          </div>
          <h1 className="text-center font-bold text-[16px] italic lg:text-left lg:mt-0">
            Origin: {clickedMeal.strArea}
          </h1>
          <h1 className="text-center font-bold text-[16px] italic lg:text-left">
            Category: {clickedMeal.strCategory}
          </h1>
          <article>
            <Ingredients
              ingredientKeys={ingredientKeys}
              clickedMeal={clickedMeal}
            />
            <div className='block lg:hidden'>
              <Instructions 
                hidden={'block'}
                clickedMeal={clickedMeal} 
                setModalOn={setModalOn} 
                modalOn={modalOn} 
                goToVideo={goToVideo}
              />
            </div>
          </article>
        </article>
      </section>
    );
};

export default ModalCard;