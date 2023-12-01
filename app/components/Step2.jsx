import styles from "../styles/form.module.css";

export default function Step2() {
  return(
    <section>
      <h3 className={styles.head}>Select your plan</h3>
      <p className={styles.info}>You have the option of monthly or yearly billing.</p>
    </section>
  )
}