import { useState, useEffect, useRef } from "react";
import MacroSquare from "./MacroSquare";
import "../App.css";

const Board = () => {
  const [id, setId] = useState(-1);
  const idRef = useRef(-1);

  const [data, setData] = useState<number[][]>(
    Array.from({ length: 81 }, () => [0, 0, 0, 0, 0, 0, 0, 0, 0])
  );
  const dataRef = useRef(data);
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

  const handleChange =
    (id: number, num: number) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Wywołano");
      setData((prevData) => {
        const newData: number[][] = prevData.map((item, index) => {
          return index === id
            ? item.map((item2, index2) => {
                return index2 === num ? parseInt(event.target.value) : item2;
              })
            : item;
        });
        dataRef.current = newData;
        return newData;
      });
      console.log(data);
      console.log(event.target);
    };

  const handleTables = (
    row1: boolean[][],
    column1: boolean[][],
    macro1: boolean[][]
  ) => {
    console.log("Zmieniono tablice");
    setRow(row1);
    setColumn(column1);
    setMacro(macro1);
    rowNumbers.current = rowNum;
    columnNumbers.current = columnNum;
    macroSquareNumbers.current = macroNum;
    console.log(rowNum);
    console.log(columnNum);
    console.log(macroNum);
  };

  const handleValues = (value: number[][]) => {
    setSquareNumbers(value);
  };

  const clearInputs = (squareId: number) => {
    console.log("Clear");
    setData((prevData) => {
      const newData: number[][] = prevData.map((item, index) => {
        return squareId === index ? [0, 0, 0, 0, 0, 0, 0, 0, 0] : item;
      });
      dataRef.current = newData;
      return newData;
    });
  };

  useEffect(() => {
    console.log(numbers.current);
    console.log(id);
  }, [id]);

  useEffect(() => {
    console.log("Zmiana row");
  }, [rowNumbers.current]);

  useEffect(() => {
    window.addEventListener("keydown", (event: KeyboardEvent) => {
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
    });
  }, []);

  return (
    <>
      <div
        style={{
          width: "504px",
          height: "504px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
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
          ></MacroSquare>
          <MacroSquare
            id={id}
            macroSquareId={1}
            onHandleId={handleId}
            onChangeTables={handleTables}
            tables={{ rowNum, columnNum, macroNum }}
            onChangeValues={handleValues}
            values={squareNumbers}
          ></MacroSquare>
          <MacroSquare
            id={id}
            macroSquareId={2}
            onHandleId={handleId}
            onChangeTables={handleTables}
            tables={{ rowNum, columnNum, macroNum }}
            onChangeValues={handleValues}
            values={squareNumbers}
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
          ></MacroSquare>
          <MacroSquare
            id={id}
            macroSquareId={4}
            onHandleId={handleId}
            onChangeTables={handleTables}
            tables={{ rowNum, columnNum, macroNum }}
            onChangeValues={handleValues}
            values={squareNumbers}
          ></MacroSquare>
          <MacroSquare
            id={id}
            macroSquareId={5}
            onHandleId={handleId}
            onChangeTables={handleTables}
            tables={{ rowNum, columnNum, macroNum }}
            onChangeValues={handleValues}
            values={squareNumbers}
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
          ></MacroSquare>
          <MacroSquare
            id={id}
            macroSquareId={7}
            onHandleId={handleId}
            onChangeTables={handleTables}
            tables={{ rowNum, columnNum, macroNum }}
            onChangeValues={handleValues}
            values={squareNumbers}
          ></MacroSquare>
          <MacroSquare
            id={id}
            macroSquareId={8}
            onHandleId={handleId}
            onChangeTables={handleTables}
            tables={{ rowNum, columnNum, macroNum }}
            onChangeValues={handleValues}
            values={squareNumbers}
          ></MacroSquare>
        </div>
      </div>
      {id !== -1 ? (
        <div id="panel">
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
          <div>
            <ul className="list-group">
              {rowNum.map((item, index) =>
                squareNumbers[Math.floor(idRef.current / 9)][
                  idRef.current % 9
                ] !==
                  index + 1 &&
                rowNum[Math.floor(idRef.current / 9)][index] &&
                columnNum[idRef.current % 9][index] &&
                macroNum[
                  (Math.floor(idRef.current / 3) % 3) +
                    3 * Math.floor(idRef.current / 27)
                ][index] ? (
                  <li className="list-group-item">
                    {index + 1}: 1/{" "}
                    {rowNum[index].reduce((prev, item, index2) => {
                      return squareNumbers[Math.floor(idRef.current / 9)][
                        index2
                      ] === 0 &&
                        rowNum[Math.floor(idRef.current / 9)][index] &&
                        columnNum[index2][index] &&
                        macroNum[
                          (Math.floor(index2 / 3) % 3) +
                            3 * Math.floor(idRef.current / 27)
                        ][index]
                        ? ++prev
                        : prev;
                    }, 0)}
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
            <button
              style={{ marginTop: "5px", marginBottom: "5px" }}
              onClick={() => clearInputs(idRef.current)}
            >
              Wyczyść dane
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Board;
