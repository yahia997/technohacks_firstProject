import styles from "../styles/form.module.css";

import { useContext } from "react";
import { StepContext, SetStepContext } from "./StepProvider";

export default function Control() {
  const step = useContext(StepContext);
  const setStep = useContext(SetStepContext);
  return (
    <div className={styles.control}>
      <button 
        onClick={() => setStep(step - 1)}
        type="button"
        className={`${styles.back} ${step <= 1 ? styles.hide : ""}`}
      >Go Back</button>
      {
        step < 4 && <button 
          onClick={() => setStep(step + 1)}
          type="button"
          className={styles.next}
        >Next Step</button>
      }
      {
        step === 4 && <button
          type="submit"
          className={styles.confirm}
        >Confirm</button>
      }
    </div>
  )
}