import React from 'react';

const NotResults = ({ inputSearch }) => {
    return (
      <div className="flex items-center justify-center w-full mt-14">
        <h3 className="text-white text-xl">
          We couldn't find any preparations with {inputSearch}, try another one!
        </h3>
      </div>
    );
};

export default NotResults;