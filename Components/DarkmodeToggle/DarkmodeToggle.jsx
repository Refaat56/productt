'use client'
import React, { useContext } from 'react'
import styles from './DarkmodeToggle.module.css'
import { ThemeContext } from '@/context/ThemContext'
const  DarkmodeToggle = () => {
  // const {mode,toggle}=useContext(ThemeContext)
const mode ="light"
  return (
    <div className={styles.container} >
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🌚</div>
        <div className={styles.switcher}
        style={mode==="light"?{left:"2px"}:{right:"2px"}}
        ></div>
    </div>
  )
}

export default  DarkmodeToggle