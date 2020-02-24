import * as React from "react"
import styled from "@emotion/styled"

import { BlockList } from "./components/BlockList"
import { Board } from "./components/Board"

const StyledSpanObject = styled.span({
  color: "lightblue",
  border: "1px solid lightblue",
  paddingRight: "2rem"
})

const App = (): JSX.Element => {
  return (
    <>
      <BlockList />
      <Board />
    </>
  )
}

export default App
