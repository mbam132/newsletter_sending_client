import React from 'react'
import Button from 'react-bootstrap/Button'
// import styles from './index.module.scss'

interface Props {
  setDisplayFirstView: (value: boolean) => void
}

function Navbar ({ setDisplayFirstView }: Props): JSX.Element {
  return (
    <div className='mt-2 mb-3'>
      <Button
        onClick={() => {
          setDisplayFirstView(true)
        }}
        className="me-5 ms-3"
      >
        Create news letter
      </Button>
      <Button onClick={() => {
        setDisplayFirstView(false)
      }}
      >
        Send news letter
      </Button>
    </div>
  )
}

export default Navbar
