import React, {
  useState, useEffect
} from 'react'
import { debounce } from 'lodash'

const names = ['Francisco', 'Gabriela', 'Andres', 'Claudio', 'Armando', 'Santiago', 'Alberto', 'Alex', 'Georgina', 'Gonzalo', 'Bombo', 'Amanda', 'Alana', 'Mario', 'Fabiola', 'Ryan', 'Luciano', 'Henrique', 'Nicolas', 'Raiza', 'Zaida', 'Carlos', 'Nolberto', 'Reynaldo', 'Francisco']

const makeRepeated = (arr: any, repeats: any): any[] => [].concat(...Array.from({ length: repeats }, () => arr))

// For this use case (making smoother the UI when an expensive filtering calculation gets done to
// an array) the lodash.debounce method works better because it waits for the amount of time
// indicated in order to perform the calculation. The useDeferredValue function performs a
// priority calculation on each key stroke, giving greater priority to a more important
// calculation you can check it by activating it below and seeing that typing isn't as
// smooth as with the debounce function

function TestingOutUseDeferredValue (): JSX.Element {
  const [arrayNames] = useState(makeRepeated(names, 20000))
  const [inputValue, setInputValue] = useState('')
  const [filteredArray, setFilteredArray] = useState<any[]>([])

  const filterArrayDebounced = debounce(() => {
    setFilteredArray(arrayNames.filter((name: String) => name.toLocaleLowerCase() === inputValue))
  }, 75)

  // const inputValue = useDeferredValue(inputValue)
  // const filteredArray = useMemo(()=> {
  // return arrayNames.filter((name:String)=>
  // name.toLocaleLowerCase()===inputValue.toLocaleLowerCase())}
  // ,[inputValue])

  useEffect(() => {
    filterArrayDebounced()
  }, [inputValue])

  const onChangeInputValue = (e: any): void => {
    setInputValue(e.target.value)
  }

  return (
    <div>

      <input type="text" value={inputValue} onChange={onChangeInputValue} />
      <p>
        {' '}
        List of names filtered by:
        {inputValue}
      </p>
      {filteredArray.map((name) => (<p key={name}>{name}</p>))}
    </div>
  )
}

export default TestingOutUseDeferredValue
