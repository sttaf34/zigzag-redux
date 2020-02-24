import * as React from "react"
import styled from "@emotion/styled"

import { BlockListIndex, BoardIndex } from "../others/types"

const StyledButton = styled.button({
  color: "black",
  borderStyle: "none",
  fontSize: "1em",
  padding: "0 1px",
  "&:focus": {
    outline: 0
  }
})

export interface BlockListCharProps {
  label: string
  ownWordIndex: number
  ownCharIndex: number
  isSelected: boolean
  boardIndex: BoardIndex | null
  tapBlockList: (selectedIndex: BlockListIndex) => void
}

export const BlockListChar: React.FC<BlockListCharProps> = (
  props: BlockListCharProps
) => {
  const {
    label,
    ownWordIndex,
    ownCharIndex,
    isSelected,
    boardIndex,
    tapBlockList
  } = props
  const newSelectedIndex: BlockListIndex = {
    block: ownWordIndex,
    char: ownCharIndex
  }

  // 状態に応じたCSSの設定
  const style: { [key: string]: string } = {}
  if (isSelected) {
    style.backgroundColor = "#eeddcc"
  }
  style.fontWeight = boardIndex == null ? "bold" : "normal"

  return (
    <>
      <StyledButton
        style={style}
        type="button"
        onClick={(): void => {
          tapBlockList(newSelectedIndex)
        }}
      >
        {label}
      </StyledButton>
    </>
  )
}
