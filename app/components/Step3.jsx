"use client";

import { useContext } from "react";
import styles from "../styles/form.module.css";
import { dataContext, setDataContext } from "./Form";

// Service Component
function Service({p1, p2, v1, v2, name}) {
  const data = useContext(dataContext);
  const setData = useContext(setDataContext);

  const checked = data.services[name];
  const MorY = data.monthlyOrYearly;

  //  handle change for checkboxes
  function handleChange() {
    setData({
      ...data,

      // Toggles between true and false
      services: {
        ...data.services,
        [name]: !data.services[name]
      },

      // Change the prices
      prices: {
        ...data.prices,
        services: {
          ...data.prices.services,
          [name]: MorY === "Monthly" ? v1 : v2
        }
      }
    });
  }

  return (
    <div 
      className={`${styles.service} ${checked ? styles.checkedCont : null}`}
      onClick={handleChange}
    >
      <button
        className={`${styles.checkbox} ${checked ? styles.checked : null}`}
        type="button"
      ></button>
      <div>
        <p className={styles.serviceTitle}>{p1}</p>
        <p className={styles.servicedes}>{p2}</p>
      </div>
      <p className={styles.servicePrice}>{MorY === "Monthly" ? `+$${v1}/mo` : `+$${v2}/yr`}</p>
    </div>
  );
}

export default function Step3() {
  return(
    <section>
      <h3 className={styles.head}>Pick add-ons</h3>
      <p className={styles.info}>Add-ons help enhance your gaming experience.</p>

      {/* Online service */}
      <Service
        p1="Online service"
        p2="Access to multiplayer games"
        v1={1}
        v2={10}
        name="onlinceService"
      />

      {/* Larger storage */}
      <Service
        p1="Larger storage"
        p2="Extra 1TB of cloud save"
        v1={2}
        v2={20}
        name="largerStorage"
      />

      {/* Customizable Profile */}
      <Service
        p1="Customizable Profile"
        p2="Custom theme on your profile"
        v1={2}
        v2={20}
        name="customizableProfile"
      />
    </section>
  )
}