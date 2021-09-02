import React from 'react';

const Square = ({layerNum, rowNum, squareNum, square, squareClicked}) => {

  const handleClick = () => {
    if (square !== null) {
      return;
    } else {
      squareClicked([layerNum, rowNum, squareNum]);
    }
  };

  return (
    <div 
      className='square'
      onClick={handleClick}>
        <h5>
          {square}
        </h5>
    </div>
  )
};

export default Square;