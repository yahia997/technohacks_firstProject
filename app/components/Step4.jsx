"use client";

import { useContext, useEffect } from "react";
import { dataContext, setDataContext } from "./Form";
import styles from "../styles/form.module.css";
import { SetStepContext } from "./StepProvider";

export default function Step4() {
  const data = useContext(dataContext);
  const setData = useContext(setDataContext);
  const setStep = useContext(SetStepContext);

  const end = data.monthlyOrYearly === "Monthly" ? "mo": "yr";

  // Calculate total price
  useEffect(() => {
    const copy = data.prices.services;
    const arr = Object.entries(data.services);
    let plan = 0;
    let total = 0;
    const m = data.monthlyOrYearly === "Monthly" ? 1 : 10;
    for(let i = 0; i < arr.length; i++) {
      // If service is selected
      if(arr[i][1]) {
        switch (arr[i][0]) {
          case "onlinceService":
            copy[arr[i][0]] = 1 * m;
            break;
          case "largerStorage":
          case "customizableProfile":
            copy[arr[i][0]] = 2 * m;
            break;
          default: 
            copy[arr[i][0]] = 0;
            break;
        }
        total += copy[arr[i][0]];
      }
    }

    const plans = [9, 12, 15];
    switch (data.plan) {
      case "Arcade":
        plan = plans[0] * m;
        break;
      case "Advanced":
        plan = plans[1] * m;
        break;  
      case "Pro":
        plan = plans[2] * m;
        break;
      default: 
        plan = 0;
        break;
    }
    total += plan;

    setData({
      ...data,
      prices: {
        plan: plan,
        services: copy,
        total: total
      }
    })
  }, []);

  return(
    <section>
      <h3 className={styles.head}>Finishing up</h3>
      <p className={styles.info}>Double-check everything looks OK before confirming.</p>

      {/* Price details */}
      <div className={styles.finishing}>
        <div className={styles.planPrice}>
          <div>
            <p>{data.plan} ({data.monthlyOrYearly})</p>
            <button 
              type="button"
              onClick={() => setStep(2)}
            >
              Change
            </button>
          </div>
          <span>${data.prices.plan}/{end}</span>
        </div>

        {/* List of selected services */}
        {
          Object.entries(data.services).map(arr => arr[1] && <div 
            key={arr[0]}
            className={styles.serviceSummary}
          >
            <p>{arr[0]}</p>
            <span>
              +${data.prices.services[arr[0]]}/{end}
            </span>
          </div>
          )
        }

        {/* Totoal */}
        <div className={styles.total}>
          <p>Total ({data.monthlyOrYearly})</p>
          <span>+${data.prices.total}/{end}</span>
        </div>
      </div>
    </section>
  )
}