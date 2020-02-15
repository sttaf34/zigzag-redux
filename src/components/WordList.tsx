import * as React from "react"
import Char from "../containers/Char"

const createWordLi = (
  word: string,
  selectedCharIndex: number | null
): JSX.Element => {
  const row = Array.from(word).map((char: string, index: number) => {
    if (index === selectedCharIndex) {
      return (
        <>
          <span style={{ border: "1px solid red" }}>
            <Char label={word[index]} ownWordIndex={0} ownCharIndex={0} />
          </span>
        </>
      )
    }
    return <Char label={word[index]} ownWordIndex={0} ownCharIndex={0} />
  })
  return <li>{row}</li>
}

export const WordList: React.FC = () => {
  const words = ["共同募金", "同音異義", "金権体質", "義理人情", "質実剛健"]

  const state = {
    selected: {
      blockIndex: 2,
      pointIndex: 3
    }
  }

  const { selected } = state
  const { blockIndex, pointIndex } = selected

  const lis = words.map((word: string, index: number) => {
    if (index === blockIndex) {
      return createWordLi(word, pointIndex)
    }
    return createWordLi(word, null)
  })

  return <ul>{lis}</ul>
}
