import React from 'react';
import Board from './Board';

const Panels = ({board, squareClicked, score, reset, winner}) => {

  return (
    <div className='panels'>
      <div className='score'>
        {winner ? 
          <div className='reset-advice'>
            Tap the board to start a new game
          </div>
          :
          null
        }
        <h3>X:</h3> <h3>{score[0]}</h3>
        <button 
          className='reset'
          onClick={reset}>
            Click here to reset
        </button>
      </div>
      <Board board={board} squareClicked={squareClicked} />
      <div className='score'>
        <h3>O:</h3><h3>{score[1]}</h3>
      </div>
    </div>
  );
};

export default Panels;