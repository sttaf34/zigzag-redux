import * as React from "react"
import { WordListIndex } from "../others/types"

export interface WordListCharProps {
  label: string
  ownWordIndex: number
  ownCharIndex: number
  tapWordList: (selectedIndex: WordListIndex) => void
}

export const WordListChar: React.FC<WordListCharProps> = (
  props: WordListCharProps
) => {
  const { label, ownWordIndex, ownCharIndex, tapWordList } = props
  const newSelectedIndex: WordListIndex = {
    word: ownWordIndex,
    char: ownCharIndex
  }
  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          tapWordList(newSelectedIndex)
        }}
      >
        {label}
      </button>
    </>
  )
}
