import { div } from 'prelude-ls';
import React, {useState, useEffect} from 'react';
import '../style/style.css';
import Panels from './Panels';
import Status from './Status';
import HowTo from './HowTo';

import checkWinner from '../logic/checkWinner';
import resetBoard from '../logic/resetBoard';

const App = () => {

  const [board, setBoard] = useState([
    [ 
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ], [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ], [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
  ]);
  const [whoseTurn, setWhoseTurn] = useState('');
  const [score, setScore] = useState([0,0]);
  const [winner, setWinner] = useState(null);
  const [howToShown, setHowToShown] = useState(false);

  useEffect(() => {
    const result = checkWinner(board);
    if (result) {
      const newScore = JSON.parse(JSON.stringify(score));
      if (result === 'X') {
        newScore[0] ++;
      } else {
        newScore[1] ++;
      };
      setScore(newScore);
      setWinner(result);
    };
    if (whoseTurn === '') {
      setWhoseTurn('X');
    } else if (whoseTurn === 'X' && !winner) {
      setWhoseTurn('O');
    } else if (whoseTurn === 'O' && !winner) {
      setWhoseTurn('X')
    };

    if (winner) {
      setWinner(null);
    };

  }, [board]);


  const handleSquareClick = (square) => {
    if (winner) return;
    const l = square[0];
    const r = square[1];
    const s = square[2];
    // const newBoard = [...board]; // this isn't creating an immutable copy, so it's done the JSON parse stringify way...
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[l][r][s] = whoseTurn;
    setBoard(newBoard);
  };

  const handleAppClick = (e) => {
    if (winner) {
      setBoard(resetBoard);
    };
  };

  const handleReset = (e) => {
    setBoard(resetBoard);
    setScore([0,0]);
  }

  const handleHowToClicked = () => {
    setHowToShown(true);
  };

  return (
    <div className='app'
      onClick={handleAppClick}
    >
      <div className='heading'>
        <h1>TIC TAC TOE 3D</h1>
      </div>
      {howToShown ?
        <>
          <Status whoseTurn={whoseTurn} winner={winner} />
          <Panels board={board} score={score} winner={winner} squareClicked={handleSquareClick} reset={handleReset} />
        </>
        :
      <HowTo handleHowToClicked={handleHowToClicked} />
      }
    </div>
  )
};

export default App;