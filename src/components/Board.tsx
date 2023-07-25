import { useState, useEffect } from "react";
import MacroSquare from "./MacroSquare";

const Board = () => {
  const [id, setId] = useState(-1);

  const handleId = (id1: number) => {
    setId(id1);
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
        </div>
      ) : null}
    </>
  );
};

export default Board;
