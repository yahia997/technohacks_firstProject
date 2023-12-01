"use client";
import styles from "../styles/form.module.css";
import { useContext } from "react";
import { StepContext, SetStepContext } from "./StepProvider";
import Control from "./Control";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

export default function Form() {
  const step = useContext(StepContext);
  const setStep = useContext(SetStepContext);

  return (
    <form className={styles.form}>
      {step === 1 && <Step1/>}
      {step === 2 && <Step2/>}
      {step === 3 && <Step3/>}
      {step === 4 && <Step4/>}
      <Control/>
    </form>
  )
}