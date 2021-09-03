import React from 'react';
import Layer from './Layer';

const Board = ({board, squareClicked}) => {
  return (
    <div className='board'>
      {board.map((layer, i) => {
        return <Layer key={i} layerNum={i} layer={layer} squareClicked={squareClicked} />
      })}
    </div>
  );
};

export default Board;