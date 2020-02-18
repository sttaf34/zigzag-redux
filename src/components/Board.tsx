import * as React from "react"

import BoardChar from "../containers/BoardChar"
import { BoardIndex } from "../others/types"
import { store } from "../others/store"
import { question1 } from "../others/questions"
import { convertToBoard } from "../others/utilities"

interface State {
  blockListIndexes: (BoardIndex | null)[][]
}

export class Board extends React.Component<{}, State> {
  public constructor(props) {
    super(props)
    this.state = { blockListIndexes: store.getState().blockListIndexes }

    store.subscribe(() => {
      this.setState({
        blockListIndexes: store.getState().blockListIndexes
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
    const { blockListIndexes } = this.state
    const board = convertToBoard(question1, blockListIndexes)

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
