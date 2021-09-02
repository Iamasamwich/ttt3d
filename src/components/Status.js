import React from 'react';

const Status = ({whoseTurn, winner}) => {

  return (
    <div className='status'>
      {winner === null ?
        <h2>{whoseTurn} to go next...</h2>
        :
        <h2>{winner} won the game!</h2>
      }
    </div>
  );
};

export default Status;