import { CalcDisplay } from "./CalcDisplay"
import { CalcWrapButtons } from "./CalcWrapButtons"
export function CalcWrap({handleNumberClick, handleOperatorClick, handleEqualClick, handleDisplayClear, number1, number2, operator}){
  const styleCalcWrap = {
    display: "flex",
    flexDirection: "column",
    border: "0.3vw solid white",
    width: "25vw",
    height: "30vw",
    borderRadius: "2vw",
    fontSize: "3vw",
    color: "white",
    padding: "2vw",
    fontWeight: "700"
  }

  return (
    <div style={styleCalcWrap} className="CalcWrap">
      <CalcDisplay number1={number1} number2={number2} operator={operator}/>
      <CalcWrapButtons handleNumberClick={handleNumberClick}
      handleOperatorClick={handleOperatorClick}
      handleEqualClick={handleEqualClick}
      handleDisplayClear={handleDisplayClear}/>
    </div>
  )
}