import "./App.css";
import { useState, useEffect } from "react";
import {
  getSoduko,
  postSoduko,
  getSodukoSolution,
} from "./services/SodukoService";

let initial = [
  [0, 5, 0, 9, 0, 0, 0, 0, 0],
  [8, 0, 0, 0, 4, 0, 3, 0, 7],
  [0, 0, 0, 2, 8, 0, 1, 9, 0],
  [5, 3, 8, 6, 0, 7, 9, 4, 0],
  [0, 2, 0, 3, 0, 1, 0, 0, 0],
  [1, 0, 9, 8, 0, 4, 6, 2, 3],
  [9, 0, 7, 4, 0, 0, 0, 0, 0],
  [0, 4, 5, 0, 0, 0, 2, 0, 9],
  [0, 0, 0, 0, 3, 0, 0, 7, 0],
];

function App() {
  const [sudokuArr, setSudokuArr] = useState(initial);

  function onChangeInput(e, row, col) {
    let value = parseInt(e.target.value) || 0
    let board = JSON.parse(JSON.stringify(sudokuArr))

    if (value === 0 || (value >= 1 && value <=9)) {
      board[row][col] = value
      setSudokuArr(board)
    }
  }

  function solveSudoku() {
    postSoduko(sudokuArr)
  }

  function resetSudoku() {
    setSudokuArr(initial)
  }

  function checkSudoku() {
    postSoduko(sudokuArr)
  }

  return (
    <div className="App">
      <header className="App-header">
        <table>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row) => {
            return (
              <tr>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col) => {
                  return (
                    <td>
                      <input
                        className="square"
                        value={
                          sudokuArr[row][col] === 0 ? "" : sudokuArr[row][col]
                        }
                        onChange={(e) => onChangeInput(e, row, col)}
                        disabled={initial[row][col] !== 0}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </table>
        <div className="buttons">

          <button className="solveButton" onClick={solveSudoku}>Solve</button>
          <button className="resetButton" onClick={resetSudoku}>Reset</button>
          <button className="checkButton" onClick={checkSudoku}>Check</button>
        </div>
      </header>
    </div>
  );
}

export default App;
