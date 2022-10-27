import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './index.module.scss'

interface PropsElem {
  elem: any
  sendNewsLetterHandler: (elem: any) => Promise<void>
}

function NewsLetterElem ({ elem, sendNewsLetterHandler }: PropsElem): JSX.Element {
  const onClickHandler = async (): Promise<void> => {
    await sendNewsLetterHandler(elem.id)
  }

  return (
    <div className={styles.elemContainer}>
      <p>{elem.name}</p>

      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button className={styles.button} onClick={onClickHandler}>Send</button>
    </div>
  )
}

function NewsletterList (): JSX.Element {
  const [newsLetters, setNewsLetters] = useState<any[]>([])

  const loadNewsLetters = async (): Promise<void> => {
    const resp: any = await axios.get('http://localhost:8000/news-letters')

    if (resp.status === 200) {
      setNewsLetters([...resp.data.response])
    }
  }

  const sendNewsLetterHandler = async (newsLetterId: number): Promise<void> => {
    await axios.get('http://localhost:8000/send-news-letter', {
      params: {
        news_letter_id: newsLetterId
      }
    })
  }

  useEffect(() => {
    const asyncInsideUseEffect = async (): Promise<void> => {
      await loadNewsLetters()
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    asyncInsideUseEffect()
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Send news letter</h1>
      {newsLetters.map((elem) => (<NewsLetterElem key={elem} elem={elem} sendNewsLetterHandler={sendNewsLetterHandler} />))}
    </div>
  )
}

export default NewsletterList
