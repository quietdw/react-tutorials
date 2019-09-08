import React from "react"
import "./chessBoard.css"
import "./cell.css"

function Cell(props) {
  return (
    <div className="cell" onClick={props.onClick}>
      {props.text}
    </div>
  )
}

function ChessBoard() {
  const [cells, setCells] = React.useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ])

  // 特征值优化

  const [n, setN] = React.useState(0)
  const [finish, setFinish] = React.useState(false)

  const tell = copy => {
    for (let i = 0; i < copy.length; i++) {
      if (
        copy[i][0] === copy[i][1] &&
        copy[i][1] === copy[i][2] &&
        copy[i][0] !== null
      ) {
        setFinish(true)
      }
    }

    for (let i = 0; i < copy.length; i++) {
      if (
        copy[0][i] === copy[1][i] &&
        copy[1][i] === copy[2][i] &&
        copy[0][i] !== null
      ) {
        setFinish(true)
      }
    }

    if (
      copy[0][0] === copy[1][1] &&
      copy[1][1] === copy[2][2] &&
      copy[0][0] !== null
    ) {
      setFinish(true)
    }

    if (
      copy[0][2] === copy[1][1] &&
      copy[1][1] === copy[2][0] &&
      copy[0][2] !== null
    ) {
      setFinish(true)
    }
  }

  const handleCellClick = (row, column) => {
    const copy = JSON.parse(JSON.stringify(cells)) // 函数式编程用较多的内存，每次更新都会用新内存
    if (copy[row][column]) {
      // 已经被点击过了就不能再点了
      return
    }
    setN(n + 1)
    copy[row][column] = n % 2 === 0 ? "×" : "⚪"
    setCells(copy)
    tell(copy)
  }

  return (
    <div className="chessBoard">
      <div className="title">⚪⚪你个××</div>
      {cells.map((items, row) => {
        return (
          <div key={row} className="row">
            {items.map((item, column) => {
              return (
                <Cell
                  key={column}
                  text={item}
                  onClick={() => {
                    handleCellClick(row, column)
                  }}
                ></Cell>
              )
            })}
          </div>
        )
      })}
      {finish && <div className="finish">游戏结束</div>}
    </div>
  )
}

export default ChessBoard
