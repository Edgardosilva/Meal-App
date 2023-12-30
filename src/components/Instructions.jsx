import React from 'react';

const Instructions = ({ clickedMeal, setModalOn, modalOn, goToVideo, hidden}) => {
    return (
      <section className={`p-5 w-full h-[400px] ${hidden} rounded-md flex flex-col justify-between bg-gradient-to-r z-0 lg:w-[900px] lg:rounded-lg lg:h-[300px]`}>
        <h1 className="text-[1.4rem] font-bold text-mainColor-600">
          Instructions
        </h1>
        <div className="overflow-y-scroll h-[220px] text-[14px] leading-6 p-1 lg:m-4">
          {clickedMeal.strInstructions}
        </div>
        <article>
          <button
            onClick={() => setModalOn(!modalOn)}
            className="bg-mainColor-400 p-2 rounded ml-4 w-[100px] hover:bg-mainColor-300 text-[14px]"
          >
            Close
          </button>
          <button
            className=" bg-mainColor-400 p-2 rounded ml-4 w-[100px] hover:bg-mainColor-300 text-[14px]"
            onClick={goToVideo}
          >
            Watch Video
          </button>
        </article>
      </section>
    );
};

export default Instructions;