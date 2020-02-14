/* eslint-disable no-restricted-syntax */
import * as React from "react"

// export interface CounterProps {
//   count: number
//   increment: () => void
//   decrement: () => void
// }

const createRow = (chars: string[]): JSX.Element => {
  const tds = chars.map((char: string) => <td>{char}</td>)
  return <tr>{tds}</tr>
}

export const Board: React.FC = () => {
  const X_MAX = 3
  const Y_MAX = 3
  const WORD_SIZE = 4
  const words = ["共同募金", "同音異義", "金権体質", "義理人情", "質実剛健"]

  const state = {
    blocks: [
      [{ x: 0, y: 0 }, null, null, null],
      [{ x: 1, y: 0 }, null, null, null],
      [{ x: 2, y: 1 }, null, null, null],
      [{ x: 3, y: 1 }, null, null, null],
      [{ x: 1, y: 3 }, null, null, null]
    ]
  }

  // board -> wordsとstateからHTMLを組み立てるのに便利な形に変換したもの
  const row0 = Array<string>(4).fill("")
  const row1 = Array<string>(4).fill("")
  const row2 = Array<string>(4).fill("")
  const row3 = Array<string>(4).fill("")
  const board = [row0, row1, row2, row3]

  const { blocks } = state
  for (let blockIndex = 0; blockIndex < blocks.length; blockIndex += 1) {
    for (let pointIndex = 0; pointIndex < WORD_SIZE; pointIndex += 1) {
      const point = blocks[blockIndex][pointIndex]
      if (point !== null) {
        board[point.x][point.y] = words[blockIndex][pointIndex]
      }
    }
  }

  const trs = board.map((row: string[]) => createRow(row))
  const table = <table>{trs}</table>
  return <>{table}</>
}
