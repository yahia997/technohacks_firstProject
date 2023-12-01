import styles from "../styles/form.module.css";

export default function Step1() {
  return(
    <section>
      <h3 className={styles.head}>Personal info</h3>
      <p className={styles.info}>Please provide your name, email address, and phone number.</p>
    </section>
  )
}