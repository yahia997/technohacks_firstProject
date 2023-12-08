import styles from "../styles/form.module.css";

import { useContext } from "react";
import { StepContext, SetStepContext } from "./StepProvider";
import { dataContext } from "./Form";

// email regular expression validation
const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default function Control({setValid}) {
  const step = useContext(StepContext);
  const setStep = useContext(SetStepContext);
  const data = useContext(dataContext);
  
  // To next step & check all are valid
  function next() {
    // check if all inputs are valid before going to the next step
    if(data.name && regex.test(data.email) && !/[a-z#`^~<>?:@$!&*_;'"/\\{}.\[\],=-]/gi.test(data.phone) && data.phone.length <= 15 && data.phone) {
      setStep(step + 1);
    }else {
      // Show validation problems
      setValid({
        name: data.name,
        email: regex.test(data.email),
        phone: !/[a-z#`^~<>?:@$!&*_;'"/\\{}.\[\],=-]/gi.test(data.phone) && data.phone.length <= 15 && data.phone
      });
    }
  }
  
  return (
    <div className={styles.control}>
      <button 
        onClick={() => setStep(step - 1)}
        type="button"
        className={`${styles.back} ${step <= 1 ? styles.hide : ""}`}
      >Go Back</button>
      {
        step < 4 && <button 
          onClick={next}
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