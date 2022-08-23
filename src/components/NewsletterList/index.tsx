import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './index.module.scss'

function NewsLetterElem ({elem, sendNewsLetterHandler}){
    const onClickHandler = async ()=>{
        await sendNewsLetterHandler(elem.id)
    }

    return (
    <div className={styles.elemContainer}>
        <p>{elem.name}</p>

        <button className={styles.button} onClick={onClickHandler}>Send</button>
    </div>
    )
}

function NewsletterList(){
    const [displayFirstView, setDisplayFirstView] = useState(true)
    const [newsLetters, setNewsLetters] = useState([])


    const loadNewsLetters = async ()=>{
        const resp = await axios.get('http://localhost:8000/news-letters')

        if(resp.status===200){
            setNewsLetters([...resp.data.response])
        }
    }

    const sendNewsLetterHandler = async (newsLetterId)=>{
        const resp = await axios.get('http://localhost:8000/send-news-letter', {params: {
            news_letter_id: newsLetterId
        }})
    }

    useEffect(()=>{
        loadNewsLetters()
    },[])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}> Send news letter</h1>
            {newsLetters.map((elem)=>(<NewsLetterElem elem={elem} sendNewsLetterHandler={sendNewsLetterHandler}/>))}
        </div>
    )
}

export default NewsletterList