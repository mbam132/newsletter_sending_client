// create react component
import React, { useState, useEffect, useMemo, useDeferredValue } from "react";
import {debounce} from "lodash";

const names = ['Francisco', 'Gabriela', 'Andres', 'Claudio', 'Armando', 'Santiago', 'Alberto', 'Alex', 'Georgina', 'Gonzalo', 'Bombo', 'Amanda', 'Alana', 'Mario', 'Fabiola', 'Ryan', 'Luciano', 'Henrique', 'Nicolas', 'Raiza', 'Zaida', 'Carlos', 'Nolberto', 'Reynaldo', 'Francisco']

const makeRepeated = (arr, repeats) =>
  [].concat(...Array.from({ length: repeats }, () => arr));



// For this use case (making smoother the UI when an expensive filtering calculation gets done to an array)
// the lodash.debounce method works better because it waits for the amount of time indicated in order to 
// perform the calculation. The useDeferredValue function sort of performs the calculation on each key stroke,
// you can check it by activating it below and seeing that typing isn't as smooth as with the debounce function

const NewReactHooksImplementation = () => {
    const [arrayNames, setArrayNames] = useState(makeRepeated(names, 20000))
    const [inputValue, setInputValue] = useState('')
    const [filteredArray, setFilteredArray] = useState([])

    const filterArrayDebounced = debounce(()=>{
        setFilteredArray(arrayNames.filter((name: String)=> name.toLocaleLowerCase()===inputValue))
    },75)

    //uncomment below to check for the useDeferredValue
    // const inputValue = useDeferredValue(inputValue)
    // const filteredArray = useMemo(()=> {
    //     return arrayNames.filter((name:String)=>name.toLocaleLowerCase()===inputValue.toLocaleLowerCase())}
    // ,[inputValue])


    useEffect(()=>{
        filterArrayDebounced()
    },[inputValue])



    const onChangeInputValue = (e)=>{
        setInputValue(e.target.value)
    }


    return(
        <div>

            <input type="text" value={inputValue} onChange={onChangeInputValue} />
            <p> List of names filtered by: {inputValue}</p>
                {filteredArray.map((name)=>(<p>{name}</p>))}
        </div>
    )
}

export default NewReactHooksImplementation