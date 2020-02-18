import { createStore } from "redux"
import gameReducer, { GameState } from "../reducers"
import { question1 } from "./questions"

const blockListIndexes = question1.blocks.map(block => block.boardIndexes)
const initialState: GameState = {
  selectedBlockListIndex: { block: 0, char: 0 },
  blockListIndexes
}
export const store = createStore(gameReducer, initialState)
