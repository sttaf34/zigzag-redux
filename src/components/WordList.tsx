import * as React from "react"

const createLi = (word: string, pointIndex: number | null): JSX.Element => {
  const row = Array.from(word).map((char: string, index: number) => {
    if (index === pointIndex) {
      return <em>{char}</em>
    }
    return <span>{char}</span>
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
      return createLi(word, pointIndex)
    }
    return createLi(word, null)
  })

  return <ul>{lis}</ul>
}
