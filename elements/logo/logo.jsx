import React from 'react'
import Link from "next/link"
import styles from "../../Components/Navbar/Navbar.module.css"
import { Montserrat} from 'next/font/google'
const logoFont = Montserrat({ subsets: ['latin'] })
const Logo = () => {
  return (
    <Link href="/" className={`${styles.logo} ${logoFont.className}`}>HEXASHOP</Link>
  )
}

export default Logo