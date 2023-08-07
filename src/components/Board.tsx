import { useState, useEffect, useRef } from "react";
import MacroSquare from "./MacroSquare";
import "../App.css";

const Board = () => {
  const [id, setId] = useState(-1);
  const idRef = useRef(-1);

  const clearRef = useRef(false);

  const handleId = (id1: number) => {
    clearRef.current = true;
    setId(id1);
    idRef.current = id1;
    clearRef.current = false;
  };

  const numbers = useRef(
    Array.from({ length: 9 }, () => [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ])
  );

  const rowNumbers = useRef(numbers.current.map((num) => [...num]));

  const columnNumbers = useRef(numbers.current.map((num) => [...num]));

  const macroSquareNumbers = useRef(numbers.current.map((num) => [...num]));

  const [rowNum, setRow] = useState(numbers.current.map((num) => [...num]));

  const [columnNum, setColumn] = useState(
    numbers.current.map((num) => [...num])
  );

  const [macroNum, setMacro] = useState(numbers.current.map((num) => [...num]));

  const [squareNumbers, setSquareNumbers] = useState(
    Array.from({ length: 9 }, () => [0, 0, 0, 0, 0, 0, 0, 0, 0])
  );

  const [probabilities, setProbabilities] = useState<number[][]>(
    Array.from({ length: 81 }, () => [9, 9, 9, 9, 9, 9, 9, 9, 9])
  );

  const handleTables = (
    row1: boolean[][],
    column1: boolean[][],
    macro1: boolean[][]
  ) => {
    setRow(row1);
    setColumn(column1);
    setMacro(macro1);
    rowNumbers.current = rowNum;
    columnNumbers.current = columnNum;
    macroSquareNumbers.current = macroNum;
  };

  const handleValues = (value: number[][]) => {
    setSquareNumbers(value);
  };

  const calculateProbabilities = (idSquare: number) => {
    const row: number[] = [];
    [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
      squareNumbers[Math.floor(idSquare / 9)][idSquare % 9] !== item + 1 &&
      rowNum[Math.floor(idSquare / 9)][item] &&
      columnNum[idSquare % 9][item] &&
      macroNum[(Math.floor(idSquare / 3) % 3) + 3 * Math.floor(idSquare / 27)][
        item
      ]
        ? row.push(
            Math.min(
              [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((prev, item, index3) => {
                return !rowNum[Math.floor(idSquare / 9)][index3] ||
                  !columnNum[idSquare % 9][index3] ||
                  !macroNum[
                    3 * Math.floor(idSquare / 27) +
                      Math.floor((idSquare % 9) / 3)
                  ][index3]
                  ? --prev
                  : prev;
              }, 9),
              rowNum[Math.floor(idSquare / 9)].reduce((prev, item2, index3) => {
                return squareNumbers[Math.floor(idSquare / 9)][index3] !== 0 ||
                  !columnNum[index3][item] ||
                  !macroNum[
                    3 * Math.floor(idSquare / 27) + Math.floor(index3 / 3)
                  ][item]
                  ? --prev
                  : prev;
              }, 9),
              columnNum[idSquare % 9].reduce((prev, item2, index3) => {
                return squareNumbers[index3][idSquare % 9] !== 0 ||
                  !rowNum[index3][item] ||
                  !macroNum[
                    3 * Math.floor(index3 / 3) + Math.floor((idSquare % 9) / 3)
                  ][item]
                  ? --prev
                  : prev;
              }, 9),
              macroNum[
                (Math.floor(idSquare / 3) % 3) + 3 * Math.floor(idSquare / 27)
              ].reduce((prev, item2, index3) => {
                return squareNumbers[
                  3 * Math.floor(idSquare / 27) + Math.floor(index3 / 3)
                ][3 * Math.floor((idSquare % 9) / 3) + (index3 % 3)] !== 0 ||
                  !rowNum[
                    3 * Math.floor(idSquare / 27) + Math.floor(index3 / 3)
                  ][item] ||
                  !columnNum[3 * Math.floor((idSquare % 9) / 3) + (index3 % 3)][
                    item
                  ]
                  ? --prev
                  : prev;
              }, 9)
            )
          )
        : row.push(10);
    });
    setProbabilities((prevProb) => {
      const prob: number[][] = [];
      prevProb.map((item, index) => {
        index === idSquare ? prob.push(row) : prob.push(item);
      });
      return prob;
    });
  };

  useEffect(() => {
    for (let i = 0; i < 81; i++) {
      calculateProbabilities(i);
    }
  }, []);

  useEffect(() => {
    if (idRef.current !== -1) {
      for (let i = 0; i < 81; i++) {
        calculateProbabilities(i);
      }
    }
  }, [squareNumbers]);

  const action = (event: KeyboardEvent) => {
    if (event.code === "ArrowLeft" && idRef.current % 9 !== 0) {
      setId((prevId) => prevId - 1);
      idRef.current--;
    } else if (event.code === "ArrowRight" && idRef.current % 9 !== 8) {
      setId((prevId) => prevId + 1);
      idRef.current++;
    } else if (
      event.code === "ArrowUp" &&
      Math.floor(idRef.current / 9) !== 0
    ) {
      setId((prevId) => prevId - 9);
      idRef.current -= 9;
    } else if (
      event.code === "ArrowDown" &&
      Math.floor(idRef.current / 9) !== 8
    ) {
      setId((prevId) => prevId + 9);
      idRef.current += 9;
    }
  };

  useEffect(() => {
    if (id !== -1) window.addEventListener("keydown", action);
    return () => window.removeEventListener("keydown", action);
  }, [id]);

  return (
    <>
      <div
        style={{
          width: "468px",
          height: "468px",
          position: "absolute",
          top: "60px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            float: "left",
          }}
        >
          <div>
            <MacroSquare
              id={id}
              macroSquareId={0}
              onHandleId={handleId}
              onChangeTables={handleTables}
              tables={{ rowNum, columnNum, macroNum }}
              onChangeValues={handleValues}
              values={squareNumbers}
              probabilities={probabilities}
            ></MacroSquare>
            <MacroSquare
              id={id}
              macroSquareId={1}
              onHandleId={handleId}
              onChangeTables={handleTables}
              tables={{ rowNum, columnNum, macroNum }}
              onChangeValues={handleValues}
              values={squareNumbers}
              probabilities={probabilities}
            ></MacroSquare>
            <MacroSquare
              id={id}
              macroSquareId={2}
              onHandleId={handleId}
              onChangeTables={handleTables}
              tables={{ rowNum, columnNum, macroNum }}
              onChangeValues={handleValues}
              values={squareNumbers}
              probabilities={probabilities}
            ></MacroSquare>
          </div>
          <div>
            <MacroSquare
              id={id}
              macroSquareId={3}
              onHandleId={handleId}
              onChangeTables={handleTables}
              tables={{ rowNum, columnNum, macroNum }}
              onChangeValues={handleValues}
              values={squareNumbers}
              probabilities={probabilities}
            ></MacroSquare>
            <MacroSquare
              id={id}
              macroSquareId={4}
              onHandleId={handleId}
              onChangeTables={handleTables}
              tables={{ rowNum, columnNum, macroNum }}
              onChangeValues={handleValues}
              values={squareNumbers}
              probabilities={probabilities}
            ></MacroSquare>
            <MacroSquare
              id={id}
              macroSquareId={5}
              onHandleId={handleId}
              onChangeTables={handleTables}
              tables={{ rowNum, columnNum, macroNum }}
              onChangeValues={handleValues}
              values={squareNumbers}
              probabilities={probabilities}
            ></MacroSquare>
          </div>
          <div>
            <MacroSquare
              id={id}
              macroSquareId={6}
              onHandleId={handleId}
              onChangeTables={handleTables}
              tables={{ rowNum, columnNum, macroNum }}
              onChangeValues={handleValues}
              values={squareNumbers}
              probabilities={probabilities}
            ></MacroSquare>
            <MacroSquare
              id={id}
              macroSquareId={7}
              onHandleId={handleId}
              onChangeTables={handleTables}
              tables={{ rowNum, columnNum, macroNum }}
              onChangeValues={handleValues}
              values={squareNumbers}
              probabilities={probabilities}
            ></MacroSquare>
            <MacroSquare
              id={id}
              macroSquareId={8}
              onHandleId={handleId}
              onChangeTables={handleTables}
              tables={{ rowNum, columnNum, macroNum }}
              onChangeValues={handleValues}
              values={squareNumbers}
              probabilities={probabilities}
            ></MacroSquare>
          </div>
        </div>
      </div>
      {id !== -1 &&
      !(
        probabilities[idRef.current].filter((item) => item != 10).length ===
          0 &&
        squareNumbers[Math.floor(idRef.current / 9)][idRef.current % 9] === 0
      ) ? (
        <div id="panel">
          <div>
            <div
              style={{
                height: "40px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                  marginLeft: "20px",
                  position: "relative",
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "fit-content",
                }}
              >
                {id + 1}
              </span>
              <button
                className="btn-close"
                onClick={() => setId(-1)}
                style={{
                  position: "relative",
                  top: "50%",
                  transform: "translateY(-50%)",
                  justifyContent: "flex-end",
                  marginRight: "10px",
                }}
              ></button>
            </div>
            <div id="parameters">
              <span>Row: {Math.floor(idRef.current / 9) + 1}</span>
              <span>Column: {(idRef.current % 9) + 1}</span>
              <span>
                MacroSquare:{" "}
                {(Math.floor(idRef.current / 3) % 3) +
                  3 * Math.floor(idRef.current / 27) +
                  1}
              </span>
            </div>
          </div>
          <div id="probabilities">
            {squareNumbers[Math.floor(idRef.current / 9)][idRef.current % 9] ===
            0 ? (
              <>
                <li style={{ display: "flex" }}>
                  <span style={{ flex: 1 }}>Number</span>
                  <span style={{ flex: 1 }}>
                    Priority{" "}
                    <img
                      src="src/img/question.jpg"
                      title="The highest priority is 1 and the lowest is 1/9. If priority is 1, the number MUST BE placed in that square."
                    ></img>
                  </span>
                </li>
                <ul className="list-group">
                  {probabilities[idRef.current].map((item, index) => {
                    return item !== 10 ? (
                      <>
                        <li style={{ display: "flex" }}>
                          <span style={{ flex: 1 }}>{index + 1}</span>
                          <span style={{ flex: 1 }}>
                            {item === 1 ? item : `1/${item}`}
                          </span>
                        </li>
                      </>
                    ) : (
                      ""
                    );
                  })}
                </ul>
              </>
            ) : (
              <span
                style={{
                  width: "100%",
                  fontSize: "80px",
                  display: "block",
                  marginTop: "112px",
                }}
              >
                {
                  squareNumbers[Math.floor(idRef.current / 9)][
                    idRef.current % 9
                  ]
                }
              </span>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Board;
