import React from 'react'
import Link from "next/link"
import styles from "./Navbar.module.css"
import {Links} from './data'
import Button from '../../elements/Button/button'
import { Montserrat} from 'next/font/google'
import Logo from '@/elements/logo/logo'
import DarkmodeToggle from '../DarkmodeToggle/DarkmodeToggle'
const logoFont = Montserrat({ subsets: ['latin'] })

const Navbar = () => {
  return (
    
    <div className={styles.container}>
      <Logo></Logo>
      
      <div className={styles.links}>
        <DarkmodeToggle></DarkmodeToggle>
      {
        Links.map((link)=>{
          return  <Link key={link.id} href={link.url} >{link.title}</Link>
        })
      }
      <Button></Button> 
      </div>
     
    </div>
   
  )
}

export default Navbar