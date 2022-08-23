import React from 'react'
import styles from './index.module.scss'

function Navbar({setDisplayFirstView}) {
  return (
    <div className={styles.container}>
      <button onClick={()=>{
        setDisplayFirstView(true)
      }}
      >
        <span className={styles.link}>Create news letter</span>
      </button>
      <button onClick={()=>{
        setDisplayFirstView(false)
      }}
      >
        <span className={styles.link}>Send news letter</span>
      </button>
    </div>
  )
}

export default Navbar