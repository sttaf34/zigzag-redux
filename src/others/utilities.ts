import { BoardIndex, Question, BlockListIndex } from "./types"

export const convertToBoard = (
  question: Question,
  blockListIndexes: (BoardIndex | null)[][]
): string[][] => {
  const { height, width, wordSize } = question
  const board = Array.from({ length: height }, () =>
    Array<string>(width).fill("")
  )

  for (let i = 0; i < blockListIndexes.length; i += 1) {
    const { word } = question.blocks[i]
    for (let j = 0; j < wordSize; j += 1) {
      const boardIndex = blockListIndexes[i][j]
      if (boardIndex !== null) {
        board[boardIndex.x][boardIndex.y] = word[j]
      }
    }
  }
  return board
}

export const isSame = (indexA: BoardIndex, indexB: BoardIndex): boolean => {
  return indexA.x === indexB.x && indexA.y === indexB.y
}

export const getSelectedChar = (
  question: Question,
  selectedBlockListIndex: BlockListIndex
): string => {
  const block = question.blocks[selectedBlockListIndex.block]
  return block.word[selectedBlockListIndex.char]
}

export const getCharOnBoard = (
  question: Question,
  blockListIndexes: (BoardIndex | null)[][],
  tappedBoardIndex: BoardIndex
): string => {
  for (let i = 0; i < blockListIndexes.length; i += 1) {
    for (let j = 0; j < question.wordSize; j += 1) {
      const boardIndex = blockListIndexes[i][j]
      if (boardIndex !== null && isSame(boardIndex, tappedBoardIndex)) {
        return question.blocks[i].word[j]
      }
    }
  }
  return ""
}
