interface Props {
  row: number;
  column: number;
  macroSquare: number;
  squareId: number;
  onHandleSquareId: (id: number) => void;
}

const Square = ({
  row,
  column,
  macroSquare,
  squareId,
  onHandleSquareId,
}: Props) => {
  return (
    <div className="square" onClick={() => onHandleSquareId(squareId)}>
      {squareId}
    </div>
  );
};

export default Square;
