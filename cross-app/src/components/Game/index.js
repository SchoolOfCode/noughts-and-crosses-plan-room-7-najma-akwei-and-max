import React, { useState } from 'react';
import Board from '../Board/index.js';

export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  // Put an X or an O in the clicked square
  const player = xIsNext ? 'X' : 'O';

  const handleClick = (index) => {
    if (winner || board[index]) return;
    setBoard([...board.slice(0, index), player, ...board.slice(index + 1)]);
    setXisNext(!xIsNext);
  };
  return (
    <>
      <h1>Try this out!</h1>
      <Board squares={board} onClick={handleClick} />
      <h3>{winner ? 'Winner:' + winner : 'Next Player:' + player}</h3>
    </>
  );
};

export default Game;
