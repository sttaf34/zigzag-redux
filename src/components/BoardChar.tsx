import * as React from "react"
import { BoardIndex } from "../others/types"

export interface BoardCharProps {
  label: string
  ownXIndex: number
  ownYIndex: number
  tapBoard: (selectedIndex: BoardIndex) => void
}

export const BoardChar: React.FC<BoardCharProps> = (props: BoardCharProps) => {
  const { label, ownXIndex, ownYIndex, tapBoard } = props
  const boardIndex: BoardIndex = {
    x: ownXIndex,
    y: ownYIndex
  }
  return (
    <>
      <button
        type="button"
        onClick={(): void => {
          tapBoard(boardIndex)
        }}
      >
        {label}
      </button>
    </>
  )
}
