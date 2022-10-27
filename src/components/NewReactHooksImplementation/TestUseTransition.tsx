import React, { useState } from 'react'

function TestingOutUseTransition (): JSX.Element {
  const [count, setCount] = useState(0)
  //   const [isPending, startTransition] = useTransition()

  const onClickHandler = (): void => {
    setTimeout(() => { setCount(count + 1) }, 1000)
  }

  return (
    <div>
      <h1>Testing out useTransition</h1>
      <button type="button" onClick={onClickHandler}> Increase count </button>
      <p>
        {' '}
        Count:
        {count}
      </p>
    </div>
  )
}

export default TestingOutUseTransition
