import * as React from "react"
import { BlockListIndex } from "../others/types"

export interface BlockListCharProps {
  label: string
  ownWordIndex: number
  ownCharIndex: number
  tapWordList: (selectedIndex: BlockListIndex) => void
}

export const BlockListChar: React.FC<BlockListCharProps> = (
  props: BlockListCharProps
) => {
  const { label, ownWordIndex, ownCharIndex, tapWordList } = props
  const newSelectedIndex: BlockListIndex = {
    block: ownWordIndex,
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
