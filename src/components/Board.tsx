import * as React from "react"
import styled from "@emotion/styled"

import BoardChar from "../containers/BoardChar"
import { BoardIndex } from "../others/types"
import { store } from "../others/store"
import { question1 } from "../others/questions"
import { convertToBoard } from "../others/utilities"

const StyledTable = styled.table({
  marginTop: 20,
  width: "100%",
  borderCollapse: "collapse",
  border: "1px solid gray",

  "& > tbody > tr > td": {
    border: "1px solid gray",
    textAlign: "center",
    verticalAlign: "middle",
    position: "relative",
    fontSize: "10vw",
    padding: "7px 0 1px 0"
  }
})

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
        <StyledTable>
          <tbody>{trs}</tbody>
        </StyledTable>
      </>
    )
  }
}
