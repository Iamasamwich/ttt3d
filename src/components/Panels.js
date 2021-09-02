import React from 'react';
import Board from './Board';

const Panels = ({board, squareClicked}) => {

  return (
    <div className='panels'>
      <div className='score'>
        X Score
      </div>
      <Board board={board} squareClicked={squareClicked} />
      <div className='score'>
        Y score
      </div>
    </div>
  )
}


export default Panels;