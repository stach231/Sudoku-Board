import { useState, useEffect, useRef } from "react";
import { CSSProperties } from "react";
import "../Probabilities.css";

interface Props {
  id: number;
  row: number;
  column: number;
  macroSquare: number;
  squareId: number;
  onHandleSquareId: (id: number) => void;
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
  probabilities: number[][];
}

const Square = ({
  id,
  row,
  column,
  macroSquare,
  squareId,
  onHandleSquareId,
  onChangeTables,
  onChangeValues,
  values,
  tables,
  probabilities,
}: Props) => {
  const tribeRef = useRef(false);
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);
  const [rowNum, setRowNum] = useState(tables.rowNum);
  const [columnNum, setColumnNum] = useState(tables.columnNum);
  const [macroNum, setMacroNum] = useState(tables.macroNum);
  const [warning, setWarning] = useState(false);
  const [posibilities, setPosibilities] = useState<number[]>([]);
  //const { rowNumber, setRowNumber } = useState<boolean[][]>(rowNumbers);

  const calculatePosibilities = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8].reduce(
      (prev: number[], item: number) => {
        if (
          rowNum[row][item] &&
          columnNum[column][item] &&
          macroNum[macroSquare][item]
        ) {
          prev.push(item);
        }
        return prev;
      },
      []
    );
  };

  const write = (event: KeyboardEvent) => {
    console.log(`${row} ${column} ${macroSquare}`);
    const editTables = (num: number, flag: boolean, value: number | null) => {
      console.log(num);
      const newValues = [...values];
      if (value === null) {
        newValues[row][column] = num + 1;
      } else {
        newValues[row][column] = value;
      }

      onChangeValues(newValues);

      setRowNum((prevRow) => {
        const newRow = [...prevRow];
        newRow[row][num] = flag;
        return newRow;
      });

      setColumnNum((prevColumn) => {
        const newColumn = [...prevColumn];
        newColumn[column][num] = flag;
        return newColumn;
      });

      setMacroNum((prevMacro) => {
        const newMacro = [...prevMacro];
        newMacro[macroSquare][num] = flag;
        return newMacro;
      });

      onChangeTables(rowNum, columnNum, macroNum);

      console.log(`Current 1: ${row - 1} ${num} ${rowNum[row - 1]}`);
      console.log(`Current 2: ${column - 1} ${num} ${columnNum[column - 1]}`);
      console.log(
        `Current 3: ${macroSquare - 1} ${num} ${macroNum[macroSquare - 1]}`
      );
    };

    if (
      (event.code === "Digit1" ||
        event.code === "Digit2" ||
        event.code === "Digit3" ||
        event.code === "Digit4" ||
        event.code === "Digit5" ||
        event.code === "Digit6" ||
        event.code === "Digit7" ||
        event.code === "Digit8" ||
        event.code === "Digit9" ||
        event.code === "Numpad1" ||
        event.code === "Numpad2" ||
        event.code === "Numpad3" ||
        event.code === "Numpad4" ||
        event.code === "Numpad5" ||
        event.code === "Numpad6" ||
        event.code === "Numpad7" ||
        event.code === "Numpad8" ||
        event.code === "Numpad9") &&
      tribeRef.current &&
      rowNum[row][parseInt(event.code[event.code.length - 1]) - 1] &&
      columnNum[column][parseInt(event.code[event.code.length - 1]) - 1] &&
      macroNum[macroSquare][parseInt(event.code[event.code.length - 1]) - 1]
    ) {
      console.log(`V0: ${valueRef.current}`);
      if (valueRef.current !== 0) {
        console.log(`V: ${valueRef.current}`);
        editTables(
          valueRef.current - 1,
          true,
          parseInt(event.code[event.code.length - 1])
        );
      }
      valueRef.current = parseInt(event.code[event.code.length - 1]);
      setValue(parseInt(event.code[event.code.length - 1]));
      editTables(parseInt(event.code[event.code.length - 1]) - 1, false, null);
    } else if (event.code === "Backspace" && tribeRef.current) {
      console.log(`Value: ${valueRef.current}`);
      editTables(valueRef.current - 1, true, 0);
      console.log("Zamiana na 0");
      valueRef.current = 0;
      setValue(0);
    } else if (event.code === "Escape") {
      onHandleSquareId(-1);
      tribeRef.current = false;
    } else if (
      (!rowNum[row][parseInt(event.code[event.code.length - 1]) - 1] ||
        !columnNum[column][parseInt(event.code[event.code.length - 1]) - 1] ||
        !macroNum[macroSquare][
          parseInt(event.code[event.code.length - 1]) - 1
        ]) &&
      id === squareId
    ) {
      console.log(`Square ${squareId} | ${id}`);
      console.log(
        `${
          !rowNum[row][parseInt(event.code[event.code.length - 1]) - 1] ||
          !columnNum[column][parseInt(event.code[event.code.length - 1]) - 1] ||
          !macroNum[macroSquare][
            parseInt(event.code[event.code.length - 1]) - 1
          ]
        } ${id === squareId} Tabele: ${
          rowNum[row][parseInt(event.code[event.code.length - 1]) - 1]
        } ${
          columnNum[column][parseInt(event.code[event.code.length - 1]) - 1]
        } ${
          macroNum[macroSquare][parseInt(event.code[event.code.length - 1]) - 1]
        }`
      );
      const warn = setInterval(() => {
        setWarning((warn) => !warn);
      }, 200);
      setTimeout(() => {
        clearInterval(warn);
      }, 800);
    }
  };

  useEffect(() => {
    if (id != -1 && row === Math.floor(id / 9)) {
      console.log(calculatePosibilities());
    }
    if (id === squareId) {
      console.log(`id: ${id} squareId: ${squareId} Dodano wydarzenie`);
      window.addEventListener("keydown", write);
      tribeRef.current = true;
    }
    return () => {
      //console.log(`id: ${id} squareId: ${squareId} Usunięto wydarzenie`);
      window.removeEventListener("keydown", write);
      tribeRef.current = false;
    };
  }, [id]);

  return (
    <div
      className={
        warning
          ? "square-warning"
          : valueRef.current === 0
          ? Math.min(...probabilities[squareId]) === 1
            ? "probabilities1"
            : Math.min(...probabilities[squareId]) === 2
            ? "probabilities2"
            : Math.min(...probabilities[squareId]) === 3
            ? "probabilities3"
            : Math.min(...probabilities[squareId]) === 4
            ? "probabilities4"
            : Math.min(...probabilities[squareId]) === 5
            ? "probabilities5"
            : Math.min(...probabilities[squareId]) === 6
            ? "probabilities6"
            : Math.min(...probabilities[squareId]) === 7
            ? "probabilities7"
            : Math.min(...probabilities[squareId]) === 8
            ? "probabilities8"
            : Math.min(...probabilities[squareId]) === 9
            ? "probabilities9"
            : "square"
          : "square"
      }
      onClick={() => {
        onHandleSquareId(squareId);
      }}
    >
      {squareId === id % 9 && squareId < 9 ? (
        <div id="arrow1" style={{ "--i": 1 } as CSSProperties}>
          <div id="arrow2">
            <div id="arrow3"></div>
          </div>
        </div>
      ) : (
        ""
      )}
      {Math.floor(squareId / 9) === Math.floor(id / 9) && squareId % 9 === 0 ? (
        <div id="arrow1" style={{ "--i": 0 } as CSSProperties}>
          <div id="arrow2">
            <div id="arrow3"></div>
          </div>
        </div>
      ) : (
        ""
      )}
      {value !== 0 ? value : ""}
      {squareId === id ? (
        <>
          <div
            className="border1"
            style={{ "--x": 0, "--y": 0 } as CSSProperties}
          ></div>
          <div
            className="border1"
            style={{ "--x": 0, "--y": 1 } as CSSProperties}
          ></div>
          <div
            className="border1"
            style={{ "--x": 1, "--y": 0 } as CSSProperties}
          ></div>
          <div
            className="border1"
            style={{ "--x": 1, "--y": 1 } as CSSProperties}
          ></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Square;
