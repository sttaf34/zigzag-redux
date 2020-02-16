import { WordListIndex, BoardIndex } from "../others/types"

export enum GameActionType {
  TAP_WORDLIST = "GAME/TAP_WORDLIST",
  TAP_BOARD = "GAME/TAP_BOARD"
}

export interface GameAction {
  type: GameActionType
  payload: {
    selectedWordListIndex: WordListIndex | null
    boardIndex: BoardIndex | null
  }
}

export const tapWordList = (
  selectedWordListIndex: WordListIndex
): GameAction => ({
  type: GameActionType.TAP_WORDLIST,
  payload: {
    selectedWordListIndex,
    boardIndex: null
  }
})

export const tapBoard = (boardIndex: BoardIndex): GameAction => ({
  type: GameActionType.TAP_BOARD,
  payload: {
    selectedWordListIndex: null,
    boardIndex
  }
})
