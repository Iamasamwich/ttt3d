import React from 'react';
import Board from './Board';

const Panels = ({board, squareClicked, score}) => {

  return (
    <div className='panels'>
      <div className='score'>
        <h3>X: {score[0]}</h3>
      </div>
      <Board board={board} squareClicked={squareClicked} />
      <div className='score'>
        <h3>O: {score[1]}</h3>
      </div>
    </div>
  );
};

export default Panels;