import * as React from "react"
import { WordCharIndex } from "../others/types"

export interface CharProps {
  label: string
  ownWordIndex: number
  ownCharIndex: number
  select: (selectedIndex: WordCharIndex) => void
}

export const Char: React.FC<CharProps> = (props: CharProps) => {
  const { label, ownWordIndex, ownCharIndex, select } = props
  const newSelectedIndex: WordCharIndex = {
    word: ownWordIndex,
    char: ownCharIndex
  }
  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          select(newSelectedIndex)
        }}
      >
        {label}
      </button>
    </>
  )
}
