import { div } from 'prelude-ls';
import React, {useState, useEffect} from 'react';
import '../style/style.css';
import Panels from './Panels';
import Status from './Status';

import checkWinner from '../logic/checkWinner';

const App = () => {

  const [board, setBoard] = useState([
    [ 
      ['x', 't', 'c'],
      ['a', 'g', 'f'],
      ['h', 'f', 'b']
    ], [
      ['u', 'g', 'u'],
      ['t', 'u', 'c'],
      ['j', 'b', 'x']
    ], [
      ['g', 'q', 'x'],
      ['210', 'a', 1],
      ['a', 'z', 'c']
    ]
  ]);
  const [whoseTurn, setWhoseTurn] = useState('X');
  const [whoWentFirst, setWhoWentFirst] = useState('X');
  const [turnCount, setTurnCount] = useState(0);
  const [score, setScore] = useState([0,0]);
  const [winner, setWinner] = useState(null);
  const [loadShown, setLoadShown] = useState(false);

  useEffect(() => {
    console.log('board useEffect, checking winner');
    const result = checkWinner(board);
    console.log('useEffect board result', result);
  }, [board])

  const handleSquareClick = (square) => {
    const l = square[0];
    const r = square[1];
    const s = square[2];
    // const newBoard = [...board]; // this isn't creating an immutable copy, so it's done the JSON parse stringify way...
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[l][r][s] = whoseTurn;
    console.log('setting new board');
    setBoard(newBoard);
    // whoseTurn === 'X' ?
    //   setWhoseTurn('Y') :
    //   setWhoseTurn('X')
  };

  return (
    <div className='app'>
      <div className='heading'>
        <h1>3D TIC TAC TOE</h1>
      </div>
      <Status whoseTurn={whoseTurn} winner={winner} />
      <Panels board={board} score={score} squareClicked={handleSquareClick} />

    </div>
  )
};

export default App;