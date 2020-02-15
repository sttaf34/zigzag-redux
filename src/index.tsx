import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"

import App from "./App"
import charReducer, { CharState } from "./reducers/char"

const initialState: CharState = { selectedIndex: { word: 0, char: 0 } }
const store = createStore(charReducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
