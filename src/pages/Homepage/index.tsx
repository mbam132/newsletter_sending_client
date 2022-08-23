import React, {useState} from 'react'
import NewNewsletter from '../../components/NewNewsletter/index.tsx'
import Navbar from '../../components/Navbar/index.tsx'
import NewsletterList from '../../components/NewsletterList/index.tsx'

function Homepage(){
    const [displayFirstView, setDisplayFirstView] = useState(true)

    return (
        <div>
            <Navbar setDisplayFirstView={setDisplayFirstView}/>
            {displayFirstView ? <NewNewsletter/> : <NewsletterList/> }
        </div>
    )
}

export default Homepage