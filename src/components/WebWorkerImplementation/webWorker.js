self.onmessage = async (message) => {
  console.log(message.data.reverseOrder)
  const daNumbers = [...Array(10000000)].map((e) => Math.floor(Math.random() * 100))
  const daArray = [...daNumbers.sort((a, b) => (message.data.reverseOrder ? b - a : a - b))]

  console.log('the array')
  console.log(daArray)

  self.postMessage({ array: daArray.length })
}
