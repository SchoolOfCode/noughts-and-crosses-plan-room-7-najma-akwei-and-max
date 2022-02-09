import React from 'react';
import Square from '../Square';

const Board = ({ squares, onClick }) => (
  <div>
    {squares.map((square, index) => (
      <Square key={index} value={square} onClick={() => onClick(index)} />
    ))}
  </div>
);

export default Board;
