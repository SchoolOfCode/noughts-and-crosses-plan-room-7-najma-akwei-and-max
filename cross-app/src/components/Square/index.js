import './Square.css';




function Square({value, onClick}) {
  const style = value ? `squares ${value}` : "squares"; 
  return (
    <div className="game-board" >
      <button className="box" {style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default Square;
