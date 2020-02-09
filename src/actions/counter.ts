export enum CounterActionType {
  INCREMENT = "COUNTER/INCREMENT",
  DECREMENT = "COUNTER/DECREMENT"
}

export interface CounterAction {
  type: CounterActionType
}

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT
})

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT
})
