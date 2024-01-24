import React from 'react';

const Loader = () => {
    
    return (
        <div className="flex justify-center items-center w-[120px] h-[300px]">
          <img
            src='loading.png'
            className="animate-spin duration-3000"
            alt="Loading Spinner"
          />
        </div>
      );
      
      
};

export default Loader;