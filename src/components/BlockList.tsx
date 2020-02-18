import * as React from "react"

import BlockListChar from "../containers/BlockListChar"
import { BlockListIndex } from "../others/types"
import { store } from "../others/store"
import { question1 } from "../others/questions"

interface State {
  selectedBlockListIndex: BlockListIndex
}

export class BlockList extends React.Component<{}, State> {
  public constructor(props) {
    super(props)
    this.state = {
      selectedBlockListIndex: store.getState().selectedBlockListIndex
    }

    store.subscribe(() => {
      this.setState({
        selectedBlockListIndex: store.getState().selectedBlockListIndex
      })
    })
  }

  private createWord = (
    word: string,
    ownWordIndex: number,
    selectedBlockListIndex: BlockListIndex
  ): JSX.Element => {
    const row = Array.from(word).map((char: string, index: number) => {
      const selectedWordIndex = selectedBlockListIndex.block
      const selectedCharIndex = selectedBlockListIndex.char
      const key = `${ownWordIndex}_${index}`
      if (ownWordIndex === selectedWordIndex && index === selectedCharIndex) {
        return (
          <BlockListChar
            label={char}
            ownWordIndex={ownWordIndex}
            ownCharIndex={index}
            key={key}
          />
        )
      }
      return (
        <BlockListChar
          label={char}
          ownWordIndex={ownWordIndex}
          ownCharIndex={index}
          key={key}
        />
      )
    })
    return <>{row}</>
  }

  public render(): JSX.Element {
    const words = question1.blocks.map(block => block.word)
    const { selectedBlockListIndex } = this.state
    const lis = words.map((word: string, ownWordIndex: number) => {
      const wordElement = this.createWord(
        word,
        ownWordIndex,
        selectedBlockListIndex
      )
      return <li key={String(ownWordIndex)}>{wordElement}</li>
    })
    return <ul>{lis}</ul>
  }
}
