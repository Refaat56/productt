import { Montserrat,Lalezar } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar/navbar'
import Footer from '@/Components/Footer/footer'
import { ThemeProvider } from '@/context/ThemContext'
const bodyfont = Montserrat({ subsets: ['latin'] ,
    
weight:['400']})


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyfont.className}`}>
      
        <div className='container'>
        <Navbar/>
       
       {children}
       <Footer/>
        </div>
        
       
        
        </body>
    </html>
  )
}
