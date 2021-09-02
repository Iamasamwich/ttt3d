import React from 'react';

const Status = ({whoseTurn, winner}) => {

  console.log(whoseTurn, winner);

  return (
    <div className='status'>
      {winner === null ?
        <h2>{whoseTurn} to go next...</h2>
        :
        null
      }
    </div>
  );
};

export default Status;