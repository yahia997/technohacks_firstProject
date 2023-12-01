"use client";
import styles from "../styles/steps.module.css";
import { useContext } from "react";
import { StepContext, SetStepContext } from "./StepProvider";

export default function Steps() {
  const step = useContext(StepContext);
  const setStep = useContext(SetStepContext);

  const isActive = (i) => {
    return i === step ? styles.active : null;
  }

  return(
    <section className={styles.steps}>
      <ul>
        {/* STEP 1 */}
        <li className={styles.step}>
          <span className={`${styles.count} ${isActive(1)}`}>1</span>
          <div>
            <small>STEP 1</small>
            <p>Your info</p>
          </div>
        </li>

        {/* STEP 2 */}
        <li className={styles.step}>
          <span className={`${styles.count} ${isActive(2)}`}>2</span>
          <div>
            <small>STEP 2</small>
            <p>Select plan</p>
          </div>
        </li>

        {/* STEP 3 */}
        <li className={styles.step}>
          <span className={`${styles.count} ${isActive(3)}`}>3</span>
          <div>
            <small>STEP 3</small>
            <p>Add-ons</p>
          </div>
        </li>

        {/* STEP 4 */}
        <li className={styles.step}>
          <span className={`${styles.count} ${isActive(4)}`}>4</span>
          <div>
            <small>STEP 4</small>
            <p>Summary</p>
          </div>
        </li>
      </ul>
    </section>
  )
}