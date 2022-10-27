// create react function component
import React, { useState } from 'react'
import styles from './index.module.scss'

const worker = new Worker(new URL('./webWorker.js', import.meta.url))

// Implementing an html web worker has to be done knowing that
// the web worker can compute expensive calculations, but it is not
// a good idea to use it for sending large messages back and forth,
// when doing so, the UI will be blocked
function WebWorkerImplementation (): JSX.Element {
  const [thaArray, setThaArray] = useState([...Array(1000)].map((e) => Math.floor(Math.random() * 100)))
  const [reverseOrder, setReverseOrder] = useState(false)

  worker.onmessage = async (e) => {
    console.log('message received from worker')
    console.log(e.data)
    // setThaArray([...JSON.parse(e.data).array])
  }

  const sortArray = (): void => {
    const numbers = [...Array(100000)].map((e) => Math.floor(Math.random() * 100))
    setThaArray([...numbers.sort(reverseOrder ? (a, b) => b - a : (a, b) => a - b)])
    setReverseOrder(!reverseOrder)
  }

  const nonBlockingSort = async (): Promise<void> => {
    worker.postMessage({ reverseOrder })
    setReverseOrder(!reverseOrder)
  }

  return (
    <div>
      <button onClick={sortArray}> Sort array</button>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button onClick={nonBlockingSort}> sort with web worker</button>
      <div className={styles.spinner} />
      {thaArray.map((e) => (<p key={e}>{e}</p>))}
    </div>
  )
}

export default WebWorkerImplementation
