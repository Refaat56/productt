'use client'
import React from 'react'
import styles from "../../Components/Navbar/Navbar.module.css"
const Button = () => {
  return (
    <button
    className={styles.logout}
    onClick={()=>{console.log("log")}}
  >
    Logout
  </button>
  )
}

export default Button