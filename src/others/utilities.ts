import { BoardIndex, Question } from "./types"

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
