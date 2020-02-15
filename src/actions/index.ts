import { WordCharIndex } from "../others/types"

export enum CharActionType {
  SELECT = "CHAR/SELECT"
}

export interface CharAction {
  type: CharActionType
  payload: {
    selectedIndex: WordCharIndex
  }
}

export const select = (selectedIndex: WordCharIndex): CharAction => ({
  type: CharActionType.SELECT,
  payload: {
    selectedIndex
  }
})
