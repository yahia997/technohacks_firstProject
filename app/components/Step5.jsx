import styles from "../styles/form.module.css";
import Image from "next/image";

export default function Step5() {
  return (
    <div className={styles.success}>
      <Image
        src="/icon-thank-you.svg"
        width={60}
        height={60}
        alt="success"
      />
      <h2>Thank you!</h2>
      <p>Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
    </div>
  )
}