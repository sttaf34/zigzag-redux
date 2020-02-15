import { Reducer } from "redux"
import { CharAction, CharActionType } from "../actions"
import { WordCharIndex } from "../others/types"

// Redux が管理する状態
export interface CharState {
  selectedIndex: WordCharIndex
}

const charReducer: Reducer<CharState, CharAction> = (
  state: CharState,
  action: CharAction
): CharState => {
  switch (action.type) {
    case CharActionType.SELECT:
      return {
        selectedIndex: action.payload.selectedIndex
      }
    default:
      return state
  }
}

export default charReducer
