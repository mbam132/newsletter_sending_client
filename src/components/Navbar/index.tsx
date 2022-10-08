import React from 'react'
import styles from './index.module.scss'
import Button from 'react-bootstrap/Button';
import classNames from 'classnames';

function Navbar({setDisplayFirstView}) {
  return (
    <div className={classNames(styles.container, 'mt-2 mb-3')}>
      <Button onClick={()=>{
        setDisplayFirstView(true)
      }}
      className='me-5 ms-3'
      >Create news letter
      </Button>
      <Button onClick={()=>{
        setDisplayFirstView(false)
      }}
      >Send news letter
      </Button>
    </div>
  )
}

export default Navbar