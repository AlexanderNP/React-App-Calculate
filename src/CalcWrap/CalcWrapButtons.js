import { CalcButtons } from "./CalcButtons"
export function CalcWrapButtons({handleNumberClick, handleOperatorClick, handleEqualClick, handleDisplayClear}){

  const styleCalcWrapButtons = {
    display: "grid",
    gridTemplate: "repeat(4, 1fr) / repeat(4, 1fr)",
    gap: "2vw"
  }

  return(
    <div style={styleCalcWrapButtons} className="CalcWrapButtons">
      <CalcButtons onClick={() => handleNumberClick('7')} text={'7'}/>
      <CalcButtons onClick={() => handleNumberClick('8')} text={'8'}/>
      <CalcButtons onClick={() => handleNumberClick('9')} text={'9'}/>
      <CalcButtons onClick={() => handleDisplayClear()} text={'C'}/>
      <CalcButtons onClick={() => handleNumberClick('4')} text={'4'}/>
      <CalcButtons onClick={() => handleNumberClick('5')} text={'5'}/>
      <CalcButtons onClick={() => handleNumberClick('6')} text={'6'}/>
      <CalcButtons onClick={() => handleOperatorClick('X')} text={'X'}/>
      <CalcButtons onClick={() => handleNumberClick('1')} text={'1'}/>
      <CalcButtons onClick={() => handleNumberClick('2')} text={'2'}/>
      <CalcButtons onClick={() => handleNumberClick('3')} text={'3'}/>
      <CalcButtons onClick={() => handleOperatorClick('%')} text={'%'}/>
      <CalcButtons onClick={() => handleNumberClick('0')} text={'0'}/>
      <CalcButtons onClick={() => handleOperatorClick('+')} text={'+'}/>
      <CalcButtons onClick={() => handleOperatorClick('-')} text={'-'}/>
      <CalcButtons onClick={() => handleEqualClick()} text={'='} />
    </div>
  )
}