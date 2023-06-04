import React from 'react'
import image from '../../assets/bofaOrCiti.png'

const TestImageMap = (): JSX.Element => {
  return (
    <div>
        <p>Click on the Bofa or Citi logo to go to their website</p>
        <img src={image} alt="bofaOrCiti" useMap='#imagemap'/>

        <map name="imagemap">
            <area shape='rect' coords='20, 30, 250, 145' alt='CitiBank' target='_blank' href='https://www.citi.com/'/>
            <area shape='rect' coords='200, 146, 430, 280' alt='Bank of America' target='_blank' href='https://www.bankofamerica.com/'/>
        </map>
    </div>
  )
}

export default TestImageMap
