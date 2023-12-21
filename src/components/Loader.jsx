import React from 'react';

const Loader = () => {
    
    return (
        <div className="flex justify-center items-center w-[200px] mt-10">
          <img
            src='src/assets/loading.png'
            className="animate-spin duration-3000"
            alt="Loading Spinner"
          />
        </div>
      );
      
      
};

export default Loader;