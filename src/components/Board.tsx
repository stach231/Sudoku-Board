import { useState, useEffect, useRef } from "react";
import MacroSquare from "./MacroSquare";

const Board = () => {
  const [id, setId] = useState(-1);

  const [data, setData] = useState<number[][]>(
    Array.from({ length: 81 }, () => [0, 0, 0, 0, 0, 0, 0, 0, 0])
  );
  const dataRef = useRef(data);
  const clearRef = useRef(false);

  const handleId = (id1: number) => {
    clearRef.current = true;
    setId(id1);
    clearRef.current = false;
  };

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
    console.log(id);
  }, [id]);

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
          <MacroSquare macroSquareId={0} onHandleId={handleId}></MacroSquare>
          <MacroSquare macroSquareId={1} onHandleId={handleId}></MacroSquare>
          <MacroSquare macroSquareId={2} onHandleId={handleId}></MacroSquare>
        </div>
        <div>
          <MacroSquare macroSquareId={3} onHandleId={handleId}></MacroSquare>
          <MacroSquare macroSquareId={4} onHandleId={handleId}></MacroSquare>
          <MacroSquare macroSquareId={5} onHandleId={handleId}></MacroSquare>
        </div>
        <div>
          <MacroSquare macroSquareId={6} onHandleId={handleId}></MacroSquare>
          <MacroSquare macroSquareId={7} onHandleId={handleId}></MacroSquare>
          <MacroSquare macroSquareId={8} onHandleId={handleId}></MacroSquare>
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
            <span>Row: {Math.floor(id / 9) + 1}</span>
            <span>Column: {(id % 9) + 1}</span>
            <span>
              MacroSquare:{" "}
              {(Math.floor(id / 3) % 3) + 3 * Math.floor(id / 27) + 1}
            </span>
          </div>
          <div>
            <ul className="list-group">
              <li className="list-group-item">
                x<sub>1</sub> :{" "}
                {dataRef.current[id][0] !== 1 && dataRef.current[id][0] !== 0
                  ? "1 /"
                  : ""}{" "}
                <input
                  type="number"
                  value={dataRef.current[id][0]}
                  onChange={handleChange(id, 0)}
                ></input>
              </li>
              <li className="list-group-item">
                x<sub>2</sub> :
                {dataRef.current[id][1] !== 1 && dataRef.current[id][1] !== 0
                  ? "1 /"
                  : ""}{" "}
                <input
                  type="number"
                  value={dataRef.current[id][1]}
                  onChange={handleChange(id, 1)}
                ></input>
              </li>
              <li className="list-group-item">
                x<sub>3</sub> :{" "}
                {dataRef.current[id][2] !== 1 && dataRef.current[id][2] !== 0
                  ? "1 /"
                  : ""}{" "}
                <input
                  type="number"
                  value={dataRef.current[id][2]}
                  onChange={handleChange(id, 2)}
                ></input>
              </li>
              <li className="list-group-item">
                x<sub>4</sub> :{" "}
                {dataRef.current[id][3] !== 1 && dataRef.current[id][3] !== 0
                  ? "1 /"
                  : ""}{" "}
                <input
                  type="number"
                  value={dataRef.current[id][3]}
                  onChange={handleChange(id, 3)}
                ></input>
              </li>
              <li className="list-group-item">
                x<sub>5</sub> :{" "}
                {dataRef.current[id][4] !== 1 && dataRef.current[id][4] !== 0
                  ? "1 /"
                  : ""}{" "}
                <input
                  type="number"
                  value={dataRef.current[id][4]}
                  onChange={handleChange(id, 4)}
                ></input>
              </li>
              <li className="list-group-item">
                x<sub>6</sub> :{" "}
                {dataRef.current[id][5] !== 1 && dataRef.current[id][5] !== 0
                  ? "1 /"
                  : ""}{" "}
                <input
                  type="number"
                  value={dataRef.current[id][5]}
                  onChange={handleChange(id, 5)}
                ></input>
              </li>
              <li className="list-group-item">
                x<sub>7</sub> :{" "}
                {dataRef.current[id][6] !== 1 && dataRef.current[id][6] !== 0
                  ? "1 /"
                  : ""}{" "}
                <input
                  type="number"
                  value={dataRef.current[id][6]}
                  onChange={handleChange(id, 6)}
                ></input>
              </li>
              <li className="list-group-item">
                x<sub>8</sub> :{" "}
                {dataRef.current[id][7] !== 1 && dataRef.current[id][7] !== 0
                  ? "1 /"
                  : ""}{" "}
                <input
                  type="number"
                  value={dataRef.current[id][7]}
                  onChange={handleChange(id, 7)}
                ></input>
              </li>
              <li className="list-group-item">
                x<sub>9</sub> :{" "}
                {dataRef.current[id][8] !== 1 && dataRef.current[id][8] !== 0
                  ? "1 /"
                  : ""}{" "}
                <input
                  type="number"
                  value={dataRef.current[id][8]}
                  onChange={handleChange(id, 8)}
                ></input>
              </li>
            </ul>
            <button
              style={{ marginTop: "5px", marginBottom: "5px" }}
              onClick={() => clearInputs(id)}
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
