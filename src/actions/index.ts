import { BlockListIndex, BoardIndex } from "../others/types"

export enum GameActionType {
  TAP_BLOCKLIST = "GAME/TAP_BLOCKLIST",
  TAP_BOARD = "GAME/TAP_BOARD"
}

export interface GameAction {
  type: GameActionType
  payload: {
    selectedBlockListIndex: BlockListIndex | null
    tappedBoardIndex: BoardIndex | null
  }
}

export const tapWordList = (
  selectedBlockListIndex: BlockListIndex
): GameAction => ({
  type: GameActionType.TAP_BLOCKLIST,
  payload: {
    selectedBlockListIndex,
    tappedBoardIndex: null
  }
})

export const tapBoard = (tappedBoardIndex: BoardIndex): GameAction => ({
  type: GameActionType.TAP_BOARD,
  payload: {
    selectedBlockListIndex: null,
    tappedBoardIndex
  }
})
