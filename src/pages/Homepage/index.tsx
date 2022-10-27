import React, { useState } from 'react'
import NewNewsletter from '../../components/NewNewsletter/index'
import Navbar from '../../components/Navbar/index'
import NewsletterList from '../../components/NewsletterList/index'

function Homepage (): JSX.Element {
  const [displayFirstView, setDisplayFirstView] = useState(true)



  
  return (
    <div>
      <Navbar setDisplayFirstView={setDisplayFirstView} />
      {displayFirstView ? <NewNewsletter /> : <NewsletterList /> }
    </div>
  )
}

export default Homepage
