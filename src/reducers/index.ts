import { Reducer } from "redux"
import { GameAction, GameActionType } from "../actions"
import { WordListIndex, BoardIndex } from "../others/types"

export interface GameState {
  selectedWordListIndex: WordListIndex
  wordList: (BoardIndex | null)[][]
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
      console.log(action.payload.boardIndex)
      // TODO: payload.boardIndex と selectedWordListIndex を元に処理を書く
      return state
    default:
      return state
  }
}

export default gameReducer
