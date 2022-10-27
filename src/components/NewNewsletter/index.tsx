import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import classNames from 'classnames'
import styles from './index.module.scss'

function NewNewsletter (): JSX.Element {
  const [name, setName] = useState<string>('')
  const [currentInputEmail, setCurrentInputEmail] = useState<string>('')
  const [emailList, setEmailList] = useState<any[]>([])

  const nameChangedHandler = (event: any): void => {
    setName(event?.target.value)
  }

  const currentInputEmailChanged = (event: any): void => {
    setCurrentInputEmail(event?.target.value)
  }

  const addToEmailList = (): void => {
    setEmailList([...emailList, currentInputEmail])
    setCurrentInputEmail('')
  }

  const clearValues = (): void => {
    setName('')
    setCurrentInputEmail('')
    setEmailList([])
  }

  const submitHandler = async (event: any): Promise<void> => {
    event.preventDefault()

    const result1 = await axios.post('http://localhost:8000/create-news-letter', {
      name
    })

    if (result1.status === 201) {
      const result2 = await axios.post('http://localhost:8000/add-recipients', {
        news_letter_id: result1.data.response.id,
        email_addresses: [...emailList]
      })

      if (result2.status === 204) {
        const formData = new FormData()
        const thaFile: any = document.querySelector('#thaFile')
        formData.append('thaFile', thaFile?.files[0])
        formData.append('news_letter_id', result1.data.response.id)

        const result3 = await axios.post('http://localhost:8000/add-file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        if (result3.status === 201) {
          clearValues()
        }
      }
    }
  }

  return (
    <div>
      <h1 className={styles.title}>Create new newsletter</h1>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.inputContainer}>
          <div className={styles.labelContainer}>
            <label htmlFor="name" className={styles.label}> News Letter name: </label>
          </div>
          <input type="text" id="name" value={name} onChange={nameChangedHandler} className={styles.input} />
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.labelContainer}>
            <label htmlFor="name" className={styles.label}> Email list </label>
          </div>
          <input type="text" id="name" value={currentInputEmail} onChange={currentInputEmailChanged} className={styles.input} />
          <Button type="button" onClick={addToEmailList} className={classNames(styles.button, 'px-1')}>
            Add email
          </Button>
        </div>
        <div className={styles.emailListContainer}>
          {emailList.map((elem) => (
            <p key={elem}>
              {' '}
              {elem}
            </p>
          ))}
        </div>
        <input
          type="file"
          id="thaFile"
          name="thaFile"
          className={styles.inputFile}
        />

        <div className={styles.submitButtonContainer}>
          <Button className="mx-auto" type="submit">Submit</Button>
        </div>
      </form>

    </div>
  )
}

export default NewNewsletter
