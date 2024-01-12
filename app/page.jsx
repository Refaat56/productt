import Image from 'next/image'

import styles from './page.module.css'
import hero from './image/undraw_be_the_hero_ssr2.svg'
export default function Home() {
  return (
   <div className={styles.container}>
      <div className={styles.col}>
          <h1 className={styles.title}>Your one-stop e-commerce destination</h1>
          <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quis dolorum pariatur fugiat enim magni illo illum iure velit beatae!</p>
          <button className={styles.button}>Button</button>
      </div>
      <div className={styles.col}>
      <Image className={styles.img} src={hero} alt=' '></Image>
      </div>
   </div>
  )
}
