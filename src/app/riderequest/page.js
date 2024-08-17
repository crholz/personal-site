import Image from 'next/image'
import styles from '../page.module.css'
import SubmissionForm from '../components/SubmissionForm'

export default function Home() {
  return (
    <main className={styles.main}>
      <SubmissionForm />
    </main>
  )
}
