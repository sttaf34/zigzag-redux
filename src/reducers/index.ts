import { Reducer } from "redux"
import { GameAction, GameActionType } from "../actions"
import { WordListIndex, BoardIndex } from "../others/types"

export interface GameState {
  selectedWordListIndex: WordListIndex
  wordList: (BoardIndex | null)[][]
}

const isNotNull = <T>(item: T | null): item is T => {
  return item !== null
}

const reduceOnTapBoard = (
  state: GameState,
  tappedBoardIndex: BoardIndex
): GameState => {
  // tappedBoardIndex が空いてるかどうかのチェック
  const boardIndexes = Array<BoardIndex | null>().concat(...state.wordList)
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
    selectedWordListIndex: { word, char }
  } = state
  const copiedWordList = [...state.wordList]
  copiedWordList[word][char] = tappedBoardIndex
  return {
    ...state,
    wordList: copiedWordList
  }
}

const gameReducer: Reducer<GameState, GameAction> = (
  state: GameState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case GameActionType.TAP_WORDLIST:
      if (action.payload.selectedWordListIndex === null) {
        return state
      }
      return {
        selectedWordListIndex: action.payload.selectedWordListIndex,
        wordList: state.wordList
      }
    case GameActionType.TAP_BOARD:
      if (action.payload.boardIndex === null) {
        return state
      }
      return reduceOnTapBoard(state, action.payload.boardIndex)
    default:
      return state
  }
}

export default gameReducer
