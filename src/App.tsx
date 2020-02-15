import * as React from "react"
import { WordList } from "./components/WordList"
import { Board } from "./components/Board"
import Char from "./containers/Char"

const App = (): JSX.Element => {
  return (
    <>
      <WordList />
      <Board />
      <Char label="一" ownWordIndex={0} ownCharIndex={0} />
      <Char label="石" ownWordIndex={0} ownCharIndex={1} />
    </>
  )
}

export default App
