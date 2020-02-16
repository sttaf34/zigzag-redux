import { createStore } from "redux"
import gameReducer, { GameState } from "../reducers"

const initialState: GameState = {
  selectedWordListIndex: { word: 0, char: 0 },
  wordList: [
    [{ x: 0, y: 0 }, null, null, null],
    [{ x: 1, y: 0 }, null, null, null],
    [{ x: 2, y: 1 }, null, null, null],
    [{ x: 3, y: 1 }, null, null, null],
    [{ x: 1, y: 3 }, null, null, null]
  ]
}
export const store = createStore(gameReducer, initialState)
