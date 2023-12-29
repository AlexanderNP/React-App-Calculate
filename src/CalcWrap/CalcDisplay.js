export function CalcDisplay({number1, number2, operator}){
  const text = `${number1 || '0'} ${operator || ''} ${number2 || ''}`;
  const styleCalcDisplay = {
    marginBottom: "2vw",
    paddingRight: "1vw",
    overflowX: "hidden",
    width: "100%",
    display: "flex",
    justifyContent: "end"
  }

  return(
    <div style={styleCalcDisplay} className="CalcDisplay">{text}</div>
  )
}