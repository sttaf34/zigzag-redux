import * as React from "react"

export interface CounterProps {
  count: number
  increment: () => void
  decrement: () => void
}

export const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  const { count, increment, decrement } = props
  return (
    <p>
      {count}
      <br />
      <button type="button" onClick={increment}>
        増
      </button>
      <button type="button" onClick={decrement}>
        減
      </button>
    </p>
  )
}
