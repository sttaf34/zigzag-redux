import * as React from "react"
import { BlockListIndex } from "../others/types"

export interface BlockListCharProps {
  label: string
  ownWordIndex: number
  ownCharIndex: number
  isSelected: boolean
  tapBlockList: (selectedIndex: BlockListIndex) => void
}

export const BlockListChar: React.FC<BlockListCharProps> = (
  props: BlockListCharProps
) => {
  const { label, ownWordIndex, ownCharIndex, tapBlockList, isSelected } = props
  const newSelectedIndex: BlockListIndex = {
    block: ownWordIndex,
    char: ownCharIndex
  }

  const style = isSelected ? { backgroundColor: "#eeddcc" } : {}

  return (
    <>
      <button
        style={style}
        type="button"
        onClick={(): void => {
          tapBlockList(newSelectedIndex)
        }}
      >
        {label}
      </button>
    </>
  )
}
