import styles from './page.module.css'
import Form from './components/Form'
import Steps from './components/Steps'
import StepProvider from './components/StepProvider'

export default function Home() {
  return (
    <main className={styles.main}>
      <StepProvider>
        <Steps/>
        <Form/>
      </StepProvider>
    </main>
  )
}
