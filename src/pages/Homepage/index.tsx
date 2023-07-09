import React, { useState } from 'react'
import NewNewsletter from '../../components/NewNewsletter/index'
import Navbar from '../../components/Navbar/index'
import NewsletterList from '../../components/NewsletterList/index'
import useKeyListen from 'src/hooks/useKeyListen'

function Homepage (): JSX.Element {
  const [displayFirstView, setDisplayFirstView] = useState(true)

  const enterKeyHandler = (): void => {
    console.log('enter key was pressed')
  }

  useKeyListen({ enterKeyCallback: enterKeyHandler })

  return (
    <div>
      <Navbar setDisplayFirstView={setDisplayFirstView} />
      {displayFirstView ? <NewNewsletter /> : <NewsletterList /> }
    </div>
  )
}

export default Homepage
