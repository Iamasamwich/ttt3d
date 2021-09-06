import React, {useEffect, useState} from 'react';
import Board from './Board';
import resetBoard from '../logic/resetBoard';

const HowTo = ({handleHowToClicked}) => {

  const [board, setBoard] = useState([]);
  const [count, setCount] = useState(0);

  const x = 'X';

  useEffect(() => {
    setBoard(resetBoard);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount(count + 1);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  useEffect(() => {
    const cycle = count % 7;
    const newBoard = JSON.parse(JSON.stringify(resetBoard()));
    switch (cycle) {
      case 0: //across one layer
        newBoard[0][0] = [x,x,x];
        setBoard(newBoard);
        return;
      case 1: //down one layer
        newBoard[0][0][0] = x;
        newBoard[0][1][0] = x;
        newBoard[0][2][0] = x;
        setBoard(newBoard);
        return;
      case 2: //diagonal one layer
        newBoard[0][0][0] = x;
        newBoard[0][1][1] = x;
        newBoard[0][2][2] = x;
        setBoard(newBoard);
        return;
      case 3: //same row & column, increasing layer
        newBoard[0][0][0] = x;
        newBoard[1][0][0] = x;
        newBoard[2][0][0] = x;
        setBoard(newBoard);
        return;
      case 4: //same row diagonal across through layers
        newBoard[0][0][0] = x;
        newBoard[1][0][1] = x;
        newBoard[2][0][2] = x;
        setBoard(newBoard);
        return;
      case 5: //same column diagonal down through layers
        newBoard[0][0][0] = x;
        newBoard[1][1][0] = x;
        newBoard[2][2][0] = x;
        setBoard(newBoard);
        return;
      case 6: //diagonal down layers cols and rows
        newBoard[0][0][0] = x;
        newBoard[1][1][1] = x;
        newBoard[2][2][2] = x;
        setBoard(newBoard);
        return;
      default:
        setBoard(newBoard);
        return;
    };
  }, [count]);

  const handleSquareClicked = () => {return};

  return (
  <div 
    className="howTo"
    onClick={handleHowToClicked}>

    <p className='howToDismiss'>*click anywhere to play the game*</p>

    <div className='intro'>
      <h2>Intro to Tic Tac Toe 3D</h2>
      <p>Like traditional Tic Tac Toe, or Naughts and Crosses, this is a two player game between player X and player O where the goal is to get three of your tokens in a row.</p>
      <p>With Tic Tac Toe 3D however, there are now layers of the 3x3 board and you can get three in a row by going down through the boards as well!</p>
      <p>This means that instead of the 8 winning solutions on a one-layer board there are now 49 winning solutions!</p>
    </div>
    <div className='examples'>
      <h2>How to win</h2>
      <p>Here are 7 examples of the 49 winning combinations... note that you can get 3 in a row going through the layers as well as only on one layer.</p>
      <p></p>
    </div>
    <Board board={board} squareClicked={handleSquareClicked}/>
  </div>
  )
}

export default HowTo;