"use client";
import styles from "../styles/form.module.css";
import { useContext, useState, createContext } from "react";
import { StepContext, SetStepContext } from "./StepProvider";
import Control from "./Control";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

// Data of the form context
const dataContext = createContext(null);
const setDataContext = createContext(null);

// email regular expression validation
const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Arcade", // default
    monthlyOrYearly: "Monthly", // default
    services: {
      onlinceService: false,
      largerStorage: false,
      customizableProfile: false
    },
    prices: {
      plan: 9,
      services: {
        onlinceService: 0,
        largerStorage: 0,
        customizableProfile: 0        
      },
      total: 9
    }
  });

  // To check validation for inputs
  const [valid, setValid] = useState({
    name: true, // just true for first time
    email: true,
    phone: true
  });

  const step = useContext(StepContext);
  const setStep = useContext(SetStepContext);

  function handleSubmit(e) {
    e.preventDefault();
    
    // Check validation of inputs before confirm
    if(data.name && regex.test(data.email) && !/[a-z#`^~<>?:@$!&*_;'"/\\{}.\[\],=-]/gi.test(data.phone) && data.phone.length <= 15 && data.phone) {
      console.log("All are valid");
      console.log("Submitted successfully !!");
      console.log(data);
      setStep(5);
    }else {
      // redirect the user to Step 1
      setStep(1);
      // Show errors
      setValid({
        name: data.name,
        email: regex.test(data.email),
        phone: !/[a-z#`^~<>?:@$!&*_;'"/\\{}.\[\],=-]/gi.test(data.phone) && data.phone.length <= 15 && data.phone
      });
    }

  }

  return (
    <dataContext.Provider value={data}>
      <setDataContext.Provider value={setData}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Step1 valid={valid} setValid={setValid} /> {/* To preserve the state for error of inputs*/}
          {step === 2 && <Step2/>}
          {step === 3 && <Step3/>}
          {step === 4 && <Step4/>}
          {step === 5 && <Step5/>}
          {step !== 5 && <Control/>}
        </form>
      </setDataContext.Provider>
    </dataContext.Provider>
  );
}

export {dataContext, setDataContext};