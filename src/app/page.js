import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import ContentPage from './components/ContentPage'
import HeaderBox from './components/HeaderBox'
import WelcomeBanner from './components/WelcomeBanner'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeaderBox />
      <WelcomeBanner />
      <ContentPage className/>
    </main>
  )
}
