"use client";

import { useContext } from "react";
import Image from "next/image";
import styles from "../styles/form.module.css";
import { dataContext, setDataContext } from "./Form";

export default function Step2() {
  const data = useContext(dataContext);
  const setData = useContext(setDataContext);

  // To toggle between Monthly and yearly
  function toggle() {
    const result = data.monthlyOrYearly === "Monthly" ? "Yearly" : "Monthly";
    setData({
      ...data, 
      monthlyOrYearly: result,
    });
  }

  // Data depending on Monthly or yearly
  const arcade = data.monthlyOrYearly === "Monthly" ? 9 : 90;
  const advanced = data.monthlyOrYearly === "Monthly" ? 12 : 120;
  const pro = data.monthlyOrYearly === "Monthly" ? 15 : 150;

  // to handle change plan
  function changePlan(name, price) {
    setData({
      ...data, 
      plan: name,

      // Change prices
      prices: {
        ...data.prices,
        plan: price
      }
     });
  }

  return(
    <section>
      <h3 className={styles.head}>Select your plan</h3>
      <p className={styles.info}>You have the option of monthly or yearly billing.</p>

      <div className={styles.plan}>
        {/* Arcade */}
        <div 
          className={`${styles.item} ${data.plan === "Arcade" && styles.active}`} 
          onClick={() => changePlan("Arcade", arcade)}
        >
          <Image
            src="/icon-arcade.svg"
            width={40}
            height={40}
            alt="Arcade"
          />
          <div>
            <p>Arcade</p>
            <small>{`$${arcade}/${arcade === 9 ? "mo" : "yr"}`}</small>
            {arcade === 90 && <p className={styles.free}>2 months free</p>}
          </div>
        </div>

        {/* Advanced */}
        <div 
          className={`${styles.item} ${data.plan === "Advanced" && styles.active}`}
          onClick={() => changePlan("Advanced", advanced)}
        >
          <Image
            src="/icon-advanced.svg"
            width={40}
            height={40}
            alt="Advanced"
          />
          <div>
            <p>Advanced</p>
            <small>{`$${advanced}/${advanced === 12 ? "mo" : "yr"}`}</small>
            {advanced === 120 && <p className={styles.free}>2 months free</p>}
          </div>
        </div>

        {/* Pro */}
        <div 
          className={`${styles.item} ${data.plan === "Pro" && styles.active}`}
          onClick={() => changePlan("Pro", pro)}
        >
          <Image
            src="/icon-pro.svg"
            width={40}
            height={40}
            alt="Pro"
          />
          <div>
            <p>Pro</p>
            <small>{`$${pro}/${pro === 15 ? "mo" : "yr"}`}</small>
            {pro === 150 && <p className={styles.free}>2 months free</p>}
          </div>
        </div>
      </div>

      {/* Monthly or Yearly */}
      <div className={styles.MorY}>
        <p 
          onClick={() => setData({...data, monthlyOrYearly: "Monthly"})}
          className={data.monthlyOrYearly === "Monthly" ? styles.selected : null}
        >Monthly</p>
        <button 
          type="button"
          className={`${styles.switch} ${data.monthlyOrYearly === "Yearly" ? styles.right : null}`} 
          onClick={toggle}
        ></button>
        <p 
          onClick={() => setData({...data, monthlyOrYearly: "Yearly"})}
          className={data.monthlyOrYearly === "Yearly" ? styles.selected : null}
        >Yearly</p>
      </div>
    </section>
  )
}