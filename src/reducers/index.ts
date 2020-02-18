import { Reducer } from "redux"
import { GameAction, GameActionType } from "../actions"
import { BlockListIndex, BoardIndex } from "../others/types"

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
  const isEmptyOnBoard = noNullBoardIndexes.some(boardIndex => {
    return (
      tappedBoardIndex.x === boardIndex.x && tappedBoardIndex.y === boardIndex.y
    )
  })

  // 埋まっている場合は無効
  if (!isEmptyOnBoard) {
    return state
  }

  // 空いているので埋める
  const {
    selectedBlockListIndex: { block, char }
  } = state
  const copiedWordList = [...state.blockListIndexes]
  copiedWordList[block][char] = tappedBoardIndex
  return {
    ...state,
    blockListIndexes: copiedWordList
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
