import * as React from "react"

import WordListChar from "../containers/WordListChar"
import { WordListIndex } from "../others/types"
import { store } from "../others/store"

interface State {
  selectedIndex: WordListIndex
}

export class WordList extends React.Component<{}, State> {
  public constructor(props) {
    super(props)
    this.state = { selectedIndex: store.getState().selectedWordListIndex }

    store.subscribe(() => {
      this.setState({
        selectedIndex: store.getState().selectedWordListIndex
      })
    })
  }

  private createWord = (
    word: string,
    ownWordIndex: number,
    selectedIndex: WordListIndex
  ): JSX.Element => {
    const row = Array.from(word).map((char: string, index: number) => {
      const selectedWordIndex = selectedIndex.word
      const selectedCharIndex = selectedIndex.char
      const key = `${ownWordIndex}_${index}`
      if (ownWordIndex === selectedWordIndex && index === selectedCharIndex) {
        return (
          <WordListChar
            label={char}
            ownWordIndex={ownWordIndex}
            ownCharIndex={index}
            key={key}
          />
        )
      }
      return (
        <WordListChar
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
    const words = ["共同募金", "同音異義", "金権体質", "義理人情", "質実剛健"]

    const { selectedIndex } = this.state
    const lis = words.map((word: string, ownWordIndex: number) => {
      const wordElement = this.createWord(word, ownWordIndex, selectedIndex)
      return <li key={String(ownWordIndex)}>{wordElement}</li>
    })
    return <ul>{lis}</ul>
  }
}
