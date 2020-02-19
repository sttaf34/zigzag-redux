import { Reducer } from "redux"
import { GameAction, GameActionType } from "../actions"
import { BlockListIndex, BoardIndex } from "../others/types"
import { isSame, getSelectedChar, getCharOnBoard } from "../others/utilities"
import { question1 } from "../others/questions"

export interface GameState {
  selectedBlockListIndex: BlockListIndex
  blockListIndexes: (BoardIndex | null)[][]
}

const isNotNull = <T>(item: T | null): item is T => {
  return item !== null
}

const reduceOnTapBoard = (
  state: GameState,
  tappedBoardIndex: BoardIndex
): GameState => {
  // tappedBoardIndex が空いてるかどうかのチェック
  const boardIndexes = Array<BoardIndex | null>().concat(
    ...state.blockListIndexes
  )
  const noNullBoardIndexes = boardIndexes.filter(isNotNull)
  const isFilledOnBoard = noNullBoardIndexes.some(boardIndex => {
    return isSame(boardIndex, tappedBoardIndex)
  })

  // 選択中文字と盤面文字が同じかどうかのチェック
  const selectedChar = getSelectedChar(question1, state.selectedBlockListIndex)
  const tappedChar = getCharOnBoard(
    question1,
    state.blockListIndexes,
    tappedBoardIndex
  )
  if (isFilledOnBoard && selectedChar !== tappedChar) {
    return state
  }

  // 埋める
  const { selectedBlockListIndex } = state
  const { block, char } = selectedBlockListIndex
  const copiedBlockListIndexes = [...state.blockListIndexes]
  copiedBlockListIndexes[block][char] = tappedBoardIndex
  return {
    ...state,
    blockListIndexes: copiedBlockListIndexes
  }
}

const gameReducer: Reducer<GameState, GameAction> = (
  state: GameState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case GameActionType.TAP_BLOCKLIST:
      if (action.payload.selectedBlockListIndex === null) {
        return state
      }
      return {
        selectedBlockListIndex: action.payload.selectedBlockListIndex,
        blockListIndexes: state.blockListIndexes
      }
    case GameActionType.TAP_BOARD:
      if (action.payload.tappedBoardIndex === null) {
        return state
      }
      return reduceOnTapBoard(state, action.payload.tappedBoardIndex)
    default:
      return state
  }
}

export default gameReducer
