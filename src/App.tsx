import * as React from "react"
import { BlockList } from "./components/BlockList"
import { Board } from "./components/Board"

const App = (): JSX.Element => {
  return (
    <>
      <BlockList />
      <Board />
    </>
  )
}

export default App
