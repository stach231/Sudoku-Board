import Square from "./Square";
import "../App.css";

interface Props {
  id: number;
  macroSquareId: number;
  onHandleId: (id: number) => void;
  onChangeTables: (
    row: boolean[][],
    column: boolean[][],
    macro: boolean[][]
  ) => void;
  onChangeValues: (values: number[][]) => void;
  values: number[][];
  tables: {
    rowNum: boolean[][];
    columnNum: boolean[][];
    macroNum: boolean[][];
  };
}

// {((macroSquareId/3)*27)+(macroSquareId%3)*3}

const MacroSquare = ({
  id,
  macroSquareId,
  onHandleId,
  onChangeTables,
  onChangeValues,
  values,
  tables,
}: Props) => {
  return (
    <div className="macrosquare">
      <div>
        <Square
          id={id}
          row={Math.floor(macroSquareId / 3) * 3}
          column={(macroSquareId % 3) * 3}
          macroSquare={macroSquareId}
          squareId={
            Math.floor(macroSquareId / 3) * 3 * 9 + (macroSquareId % 3) * 3
          }
          onHandleSquareId={onHandleId}
          onChangeTables={onChangeTables}
          onChangeValues={onChangeValues}
          values={values}
          tables={tables}
        ></Square>
        <Square
          id={id}
          row={Math.floor(macroSquareId / 3) * 3}
          column={(macroSquareId % 3) * 3 + 1}
          macroSquare={macroSquareId}
          squareId={
            Math.floor(macroSquareId / 3) * 3 * 9 +
            ((macroSquareId % 3) * 3 + 1)
          }
          onHandleSquareId={onHandleId}
          onChangeTables={onChangeTables}
          onChangeValues={onChangeValues}
          values={values}
          tables={tables}
        ></Square>
        <Square
          id={id}
          row={Math.floor(macroSquareId / 3) * 3}
          column={(macroSquareId % 3) * 3 + 2}
          macroSquare={macroSquareId}
          squareId={
            Math.floor(macroSquareId / 3) * 3 * 9 +
            ((macroSquareId % 3) * 3 + 2)
          }
          onHandleSquareId={onHandleId}
          onChangeTables={onChangeTables}
          onChangeValues={onChangeValues}
          values={values}
          tables={tables}
        ></Square>
      </div>
      <div>
        <Square
          id={id}
          row={Math.floor(macroSquareId / 3) * 3 + 1}
          column={(macroSquareId % 3) * 3}
          macroSquare={macroSquareId}
          squareId={
            (Math.floor(macroSquareId / 3) * 3 + 1) * 9 +
            (macroSquareId % 3) * 3
          }
          onHandleSquareId={onHandleId}
          onChangeTables={onChangeTables}
          onChangeValues={onChangeValues}
          values={values}
          tables={tables}
        ></Square>
        <Square
          id={id}
          row={Math.floor(macroSquareId / 3) * 3 + 1}
          column={(macroSquareId % 3) * 3 + 1}
          macroSquare={macroSquareId}
          squareId={
            (Math.floor(macroSquareId / 3) * 3 + 1) * 9 +
            ((macroSquareId % 3) * 3 + 1)
          }
          onHandleSquareId={onHandleId}
          onChangeTables={onChangeTables}
          onChangeValues={onChangeValues}
          values={values}
          tables={tables}
        ></Square>
        <Square
          id={id}
          row={Math.floor(macroSquareId / 3) * 3 + 1}
          column={(macroSquareId % 3) * 3 + 2}
          macroSquare={macroSquareId}
          squareId={
            (Math.floor(macroSquareId / 3) * 3 + 1) * 9 +
            ((macroSquareId % 3) * 3 + 2)
          }
          onHandleSquareId={onHandleId}
          onChangeTables={onChangeTables}
          onChangeValues={onChangeValues}
          values={values}
          tables={tables}
        ></Square>
      </div>
      <div>
        <Square
          id={id}
          row={Math.floor(macroSquareId / 3) * 3 + 2}
          column={(macroSquareId % 3) * 3}
          macroSquare={macroSquareId}
          squareId={
            (Math.floor(macroSquareId / 3) * 3 + 2) * 9 +
            (macroSquareId % 3) * 3
          }
          onHandleSquareId={onHandleId}
          onChangeTables={onChangeTables}
          onChangeValues={onChangeValues}
          values={values}
          tables={tables}
        ></Square>
        <Square
          id={id}
          row={Math.floor(macroSquareId / 3) * 3 + 2}
          column={(macroSquareId % 3) * 3 + 1}
          macroSquare={macroSquareId}
          squareId={
            (Math.floor(macroSquareId / 3) * 3 + 2) * 9 +
            ((macroSquareId % 3) * 3 + 1)
          }
          onHandleSquareId={onHandleId}
          onChangeTables={onChangeTables}
          onChangeValues={onChangeValues}
          values={values}
          tables={tables}
        ></Square>
        <Square
          id={id}
          row={Math.floor(macroSquareId / 3) * 3 + 2}
          column={(macroSquareId % 3) * 3 + 2}
          macroSquare={macroSquareId}
          squareId={
            (Math.floor(macroSquareId / 3) * 3 + 2) * 9 +
            ((macroSquareId % 3) * 3 + 2)
          }
          onHandleSquareId={onHandleId}
          onChangeTables={onChangeTables}
          onChangeValues={onChangeValues}
          values={values}
          tables={tables}
        ></Square>
      </div>
    </div>
  );
};

export default MacroSquare;
