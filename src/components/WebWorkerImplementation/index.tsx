//create react function component
import { reverse } from "dns";
import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import styles from './index.module.scss';
const worker = new Worker(new URL('./webWorker.js', import.meta.url));

//Implementing an html web worker has to be done knowing that 
//the web worker can compute expensive calculations, but it is not 
//a good idea to use it for sending large messages back and forth,
//when doing so, the UI will be blocked
const WebWorkerImplementation = () => {
    const [thaArray, setThaArray] = useState([...Array(1000)].map((e)=>Math.floor(Math.random()*100)))
    const [reverseOrder,setReverseOrder] = useState(false)
    
    worker.onmessage = async(e) =>{
        console.log('message received from worker')
        console.log(e.data)
        // setThaArray([...JSON.parse(e.data).array])
    }

    const sortArray= ()=>{
        const numbers = [...Array(100000)].map((e)=>Math.floor(Math.random()*100));
        setThaArray([...numbers.sort(reverseOrder? (a,b)=>b-a : (a,b)=>a-b)])
        setReverseOrder(!reverseOrder)
    }


    const nonBlockingSort = async ()=>{
        worker.postMessage({reverseOrder})
        setReverseOrder(!reverseOrder)
    }

    return(
        <div>
            <button onClick={sortArray}> Sort array</button>
            <button onClick={nonBlockingSort}> sort with web worker</button>
            <div className={styles.spinner}  />
            {thaArray.map((e)=>(<p>{e}</p>))}
        </div>
    )

}

export default WebWorkerImplementation;