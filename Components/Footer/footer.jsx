import React from 'react'
import Image from 'next/image'
import { Icon } from './data'
import styles from "../Footer/Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
          <div >© Hexashop .All right reserved.</div>
          <div className={styles.social}>
            {
              Icon.map((icon)=>{
                  return <Image key={icon.id} src={icon.url} width={20} height={20} alt={icon.title} className={styles.icon}></Image>
              })
            }
          

          </div>

    </div>
  )
}

export default Footer