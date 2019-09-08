import React from "react"
import "./cell.css"

function Cell(props) {
  const [text, setText] = React.useState("")
  const handleCellClick = () => {
    setText("×")
  }
  return (
    <div className="cell" onClick={handleCellClick}>
      {text}
    </div>
  )
}

export default Cell
