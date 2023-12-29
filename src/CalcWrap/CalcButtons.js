export function CalcButtons({text, onClick}){
  const styleCalcButtons = {
    border:"none",
    color:"black",
    backgroundColor:"white",
    borderRadius: "50%",
    fontSize: "3vw",
    width: "4vw",
    height: "4vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    cursor: "pointer"
  }

  return(
    <button style={styleCalcButtons} onClick={onClick} >{text}</button>
  )
}