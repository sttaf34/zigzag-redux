import * as React from "react"

import BoardChar from "../containers/BoardChar"
import { BoardIndex } from "../others/types"
import { store } from "../others/store"

interface State {
  wordList: (BoardIndex | null)[][]
}

export class Board extends React.Component<{}, State> {
  public constructor(props) {
    super(props)
    this.state = { wordList: store.getState().wordList }

    store.subscribe(() => {
      this.setState({
        wordList: store.getState().wordList
      })
    })
  }

  private createRow = (chars: string[], ownXIndex: number): JSX.Element => {
    const tds = chars.map((char: string, index: number) => {
      const key = `${ownXIndex}_${index}`
      return (
        <td key={key}>
          <BoardChar label={char} ownXIndex={ownXIndex} ownYIndex={index} />
        </td>
      )
    })
    return <>{tds}</>
  }

  public render(): JSX.Element {
    const X_MAX = 3
    const Y_MAX = 3
    const WORD_SIZE = 4
    const words = ["共同募金", "同音異義", "金権体質", "義理人情", "質実剛健"]
    const { wordList } = this.state

    const board = Array.from({ length: X_MAX + 1 }, () =>
      Array<string>(Y_MAX + 1).fill("")
    )
    for (let i = 0; i < wordList.length; i += 1) {
      for (let j = 0; j < WORD_SIZE; j += 1) {
        const boardIndex = wordList[i][j]
        if (boardIndex !== null) {
          board[boardIndex.x][boardIndex.y] = words[i][j]
        }
      }
    }

    const trs = board.map((row: string[], ownXIndex: number) => {
      const element = this.createRow(row, ownXIndex)
      return <tr key={String(ownXIndex)}>{element}</tr>
    })
    return (
      <>
        <table>
          <tbody>{trs}</tbody>
        </table>
      </>
    )
  }
}
