import React from 'react';
import Square from './Square';

const Row = ({layerNum, rowNum, row, squareClicked}) => {
  return (
    <div className='row'>
      {row.map((square, i) => {
        return <Square key={i} layerNum={layerNum} rowNum={rowNum} squareNum={i} square={square} squareClicked={squareClicked} />
      })}
    </div>
  )
};

export default Row;