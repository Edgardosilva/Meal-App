import React from 'react';
import Instructions from './Instructions';
import ModalCard from './ModalCard';

const ModalLayout = ({ clickedMeal, setModalOn, modalOn }) => {

  const goToVideo = () => {
    window.open(clickedMeal.strYoutube, '_blank')
  }

  const ingredientKeys = Object.keys(clickedMeal).filter(
    key => key.startsWith('strIngredient') && clickedMeal[key]
  );

  return (
    <main className="absolute flex flex-col items-center justify-center w-full h-screen animate-fade animate-duration-500 bg-black bg-opacity-90 ; ">
      <section className="z-0 flex w-[350px] h-[600px] mb-16 lg:w-[900px] lg:h-[400px] lg:mb-[59px]">
        <article className="rounded pr-2">
          <img
            src={clickedMeal.strMealThumb}
            className=" hidden w-[450px] h-[450px] rounded-xl sm:hidden lg:block"
            alt={clickedMeal.strMeal}
          />
        </article>
        <ModalCard 
          clickedMeal={clickedMeal} 
          ingredientKeys={ingredientKeys} 
          setModalOn={setModalOn} 
          modalOn={modalOn} 
          goToVideo={goToVideo}
          hight={'700px'}
        />
      </section>
      <div className='hidden lg:block lg:z-0'>
        <Instructions 
          hidden={'block'}
          clickedMeal={clickedMeal} 
          setModalOn={setModalOn} 
          modalOn={modalOn} 
          goToVideo={goToVideo}
        />
      </div>
    </main>
  );
};

export default ModalLayout;

