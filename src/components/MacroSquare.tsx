import Square from "./Square";

interface Props {
  macroSquareId: number;
  onHandleId: (id: number) => void;
}

// {((macroSquareId/3)*27)+(macroSquareId%3)*3}

const MacroSquare = ({ macroSquareId, onHandleId }: Props) => {
  return (
    <div className="macrosquare">
      <div>
        <Square
          row={Math.floor(macroSquareId / 3) * 3}
          column={(macroSquareId % 3) * 3}
          macroSquare={macroSquareId}
          squareId={
            Math.floor(macroSquareId / 3) * 3 * 9 + (macroSquareId % 3) * 3
          }
          onHandleSquareId={onHandleId}
        ></Square>
        <Square
          row={Math.floor(macroSquareId / 3) * 3}
          column={(macroSquareId % 3) * 3 + 1}
          macroSquare={macroSquareId}
          squareId={
            Math.floor(macroSquareId / 3) * 3 * 9 +
            ((macroSquareId % 3) * 3 + 1)
          }
          onHandleSquareId={onHandleId}
        ></Square>
        <Square
          row={Math.floor(macroSquareId / 3) * 3}
          column={(macroSquareId % 3) * 3 + 2}
          macroSquare={macroSquareId}
          squareId={
            Math.floor(macroSquareId / 3) * 3 * 9 +
            ((macroSquareId % 3) * 3 + 2)
          }
          onHandleSquareId={onHandleId}
        ></Square>
      </div>
      <div>
        <Square
          row={Math.floor(macroSquareId / 3) * 3 + 1}
          column={(macroSquareId % 3) * 3}
          macroSquare={macroSquareId}
          squareId={
            (Math.floor(macroSquareId / 3) * 3 + 1) * 9 +
            (macroSquareId % 3) * 3
          }
          onHandleSquareId={onHandleId}
        ></Square>
        <Square
          row={Math.floor(macroSquareId / 3) * 3 + 1}
          column={(macroSquareId % 3) * 3 + 1}
          macroSquare={macroSquareId}
          squareId={
            (Math.floor(macroSquareId / 3) * 3 + 1) * 9 +
            ((macroSquareId % 3) * 3 + 1)
          }
          onHandleSquareId={onHandleId}
        ></Square>
        <Square
          row={Math.floor(macroSquareId / 3) * 3 + 1}
          column={(macroSquareId % 3) * 3 + 2}
          macroSquare={macroSquareId}
          squareId={
            (Math.floor(macroSquareId / 3) * 3 + 1) * 9 +
            ((macroSquareId % 3) * 3 + 2)
          }
          onHandleSquareId={onHandleId}
        ></Square>
      </div>
      <div>
        <Square
          row={Math.floor(macroSquareId / 3) * 3 + 2}
          column={(macroSquareId % 3) * 3}
          macroSquare={macroSquareId}
          squareId={
            (Math.floor(macroSquareId / 3) * 3 + 2) * 9 +
            (macroSquareId % 3) * 3
          }
          onHandleSquareId={onHandleId}
        ></Square>
        <Square
          row={Math.floor(macroSquareId / 3) * 3 + 2}
          column={(macroSquareId % 3) * 3 + 1}
          macroSquare={macroSquareId}
          squareId={
            (Math.floor(macroSquareId / 3) * 3 + 2) * 9 +
            ((macroSquareId % 3) * 3 + 1)
          }
          onHandleSquareId={onHandleId}
        ></Square>
        <Square
          row={Math.floor(macroSquareId / 3) * 3 + 2}
          column={(macroSquareId % 3) * 3 + 2}
          macroSquare={macroSquareId}
          squareId={
            (Math.floor(macroSquareId / 3) * 3 + 2) * 9 +
            ((macroSquareId % 3) * 3 + 2)
          }
          onHandleSquareId={onHandleId}
        ></Square>
      </div>
    </div>
  );
};

export default MacroSquare;
