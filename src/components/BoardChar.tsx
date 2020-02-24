import * as React from "react"
import styled from "@emotion/styled"

import { BoardIndex } from "../others/types"

const StyledButton = styled.button({
  fontSize: "1em",
  "& span.number": {
    position: "absolute",
    top: 0,
    left: 2,
    fontSize: "4vw"
  }
})

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
      <StyledButton
        type="button"
        onClick={(): void => {
          tapBoard(boardIndex)
        }}
      >
        {label}
      </StyledButton>
    </>
  )
}
