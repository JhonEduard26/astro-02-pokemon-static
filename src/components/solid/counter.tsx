import { createSignal, type Component } from "solid-js"

interface Props {
  initialValue: number
}

export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initialValue)

  return (
    <>
      <h1>Counter</h1>
      <h4>Value: {counter()}</h4>

      <div class="flex gap-6">
        <button onclick={() => setCounter(prev => ++prev)} class="px-2 py-1 rounded bg-purple-500 text-purple-100">+1</button>
        <button onclick={() => setCounter(prev => --prev)} class="px-2 py-1 rounded bg-purple-500 text-purple-100">-1</button>
      </div>
    </>
  )
}