import * as React from "react"
import styled from "@emotion/styled"

import BlockListChar from "../containers/BlockListChar"
import { BlockListIndex, BoardIndex } from "../others/types"
import { store } from "../others/store"
import { question1 } from "../others/questions"

const StyledTable = styled.table({
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "8vw",
  "@media(min-width: 500px)": {
    fontSize: 40
  }
})

interface State {
  selectedBlockListIndex: BlockListIndex
  blockListIndexes: (BoardIndex | null)[][]
}

export class BlockList extends React.Component<{}, State> {
  public constructor(props) {
    super(props)
    this.state = {
      selectedBlockListIndex: store.getState().selectedBlockListIndex,
      blockListIndexes: store.getState().blockListIndexes
    }

    store.subscribe(() => {
      this.setState({
        selectedBlockListIndex: store.getState().selectedBlockListIndex,
        blockListIndexes: store.getState().blockListIndexes
      })
    })
  }

  private createWord = (
    word: string,
    ownWordIndex: number,
    selectedBlockListIndex: BlockListIndex,
    boardIndexes: (BoardIndex | null)[]
  ): JSX.Element => {
    const row = Array.from(word).map((char: string, index: number) => {
      const selectedWordIndex = selectedBlockListIndex.block
      const selectedCharIndex = selectedBlockListIndex.char
      const key = `${ownWordIndex}_${index}`
      const isSelected =
        ownWordIndex === selectedWordIndex && index === selectedCharIndex
      const boardIndex = boardIndexes[index]
      return (
        <BlockListChar
          label={char}
          ownWordIndex={ownWordIndex}
          ownCharIndex={index}
          isSelected={isSelected}
          boardIndex={boardIndex}
          key={key}
        />
      )
    })
    return <>{row}</>
  }

  private createTds = (words: string[]): JSX.Element[] => {
    const { blockListIndexes, selectedBlockListIndex } = this.state
    const tds = words.map((word: string, ownWordIndex: number) => {
      const boardIndex = blockListIndexes[ownWordIndex]
      const wordElement = this.createWord(
        word,
        ownWordIndex,
        selectedBlockListIndex,
        boardIndex
      )
      return <td key={String(ownWordIndex)}>{wordElement}</td>
    })
    return tds
  }

  private createTrs = (words: string[]): JSX.Element[] => {
    const trs = Array<JSX.Element>()
    const tds = this.createTds(words)
    const tdsLength = tds.length
    const quotient = Math.floor(tdsLength / 2)
    const rowLength = tdsLength % 2 === 0 ? quotient : quotient + 1
    for (let index = 0; index < rowLength; index += 1) {
      const leftIndex = index * 2
      const rightIndex = index * 2 + 1
      const tr = (
        <tr key={String(index)}>
          <td>{leftIndex + 1}.</td>
          {tds[leftIndex]}
          <td>{rightIndex + 1}.</td>
          {tds[rightIndex]}
        </tr>
      )
      trs.push(tr)
    }
    return trs
  }

  public render(): JSX.Element {
    const words = question1.blocks.map(block => block.word)
    const trs = this.createTrs(words)
    return (
      <StyledTable>
        <tbody>{trs}</tbody>
      </StyledTable>
    )
  }
}
