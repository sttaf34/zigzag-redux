import * as React from "react"
import { WordList } from "./components/WordList"
import { Board } from "./components/Board"

const App = (): JSX.Element => {
  return (
    <>
      <WordList />
      <Board />
    </>
  )
}

export default App
