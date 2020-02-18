export interface BlockListIndex {
  block: number
  char: number
}

export interface BoardIndex {
  x: number
  y: number
}

export interface Block {
  word: string
  boardIndexes: (BoardIndex | null)[]
}

export interface Question {
  id: number
  title: string
  height: number
  width: number
  wordSize: number
  blocks: Block[]
}
