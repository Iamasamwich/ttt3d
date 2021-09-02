import React from 'react';
import Row from './Row';

const Layer = ({layerNum, layer, squareClicked}) => {

  return (
    <div className='layer'>
      {layer.map((row, i) => {
        return <Row key={i} layerNum={layerNum} rowNum={i} row={row} squareClicked={squareClicked} />
      })}
    </div>
  );
};

export default Layer;