import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"

import App from "./App"
import counterReducer, { CounterState } from "./reducers/counter"

const initialState: CounterState = { count: 0 }

// Store -> 状態を一言管理する
// https://redux.js.org/api/store/
const store = createStore(counterReducer, initialState)

// Provider -> 階層下のコンポーネントで Store を利用できるようにする
// https://react-redux.js.org/api/provider

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
