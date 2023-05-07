import React, { useState } from "react";
import Cell from "../Cell/Cell";

import "./Board.css";

const Board = ({ size }) => {
  const createGrid = () =>
    new Array(size)
      .fill()
      .map((row) =>
        new Array(size).fill().map((column) => Math.random() < 0.4)
      );

  const [board, setBoard] = useState(createGrid());

  const toggleLights = (row, col) => {
    const copy = [...board.map((row) => [...row])];

    copy[row][col] = !copy[row][col];
    if (row < size - 1) copy[row + 1][col] = !copy[row + 1][col];
    if (row > 0) copy[row - 1][col] = !copy[row - 1][col];
    if (col < size - 1) copy[row][col + 1] = !copy[row][col + 1];
    if (col > 0) copy[row][col - 1] = !copy[row][col - 1];

    setBoard(copy);
  };

  const gameEnds = () => board.every((row) => row.every((column) => !column));
  

  return (
    <div className="board">
      {gameEnds() ? (
        <div className="won">You won!</div>
      ) : (
        board.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((_, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                rowIndex={rowIndex}
                colIndex={colIndex}
                isOn={board[rowIndex][colIndex]}
                toggleLights={toggleLights}
              />
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Board;
