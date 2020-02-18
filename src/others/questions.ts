import { Question } from "./types"

export const question1: Question = {
  id: 1,
  title: "お試し問題",
  height: 4,
  width: 4,
  wordSize: 4,
  blocks: [
    { word: "共同募金", boardIndexes: [{ x: 0, y: 0 }, null, null, null] },
    { word: "同音異義", boardIndexes: [{ x: 1, y: 0 }, null, null, null] },
    { word: "金権体質", boardIndexes: [{ x: 2, y: 1 }, null, null, null] },
    { word: "義理人情", boardIndexes: [{ x: 3, y: 1 }, null, null, null] },
    { word: "質実剛健", boardIndexes: [{ x: 1, y: 3 }, null, null, null] }
  ]
}
