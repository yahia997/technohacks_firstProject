"use client";
import { useState, useContext } from "react";
import {StepContext} from "./StepProvider";
import { dataContext, setDataContext } from "./Form";
import styles from "../styles/form.module.css";

// email regular expression validation
const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default function Step1({valid, setValid}) {
  const step = useContext(StepContext);
  const data = useContext(dataContext);
  const setData = useContext(setDataContext);
  

  // For required fields
  function required() {
    setValid({...valid, name: data.name});
  }

  // email validation
  function emailValidation() {
    setValid({...valid, email: regex.test(data.email)});
  }

  // For phone number validation
  function phoneValidation() {
    setValid({...valid, phone: !/[a-z#`^~<>?:@$!&*_;'"/\\{}.\[\],=-]/gi.test(data.phone) && data.phone.length <= 15 && data.phone});
  }


  if(step === 1) {
    return(
      <section>
        <h3 className={styles.head}>Personal info</h3>
        <p className={styles.info}>Please provide your name, email address, and phone number.</p>

        {/* Name */}
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          {!valid.name && <strong>This field is required</strong>}
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({...data, name: e.target.value})}
            onBlur={required}
            className={`${!valid.name ? "error" : ""}`}
            id="name"
            placeholder="e.g. Stephen King"
          />
        </div>


        {/* Email */}
        <div className={styles.field}>
          <label htmlFor="email">Email Address</label>
          {!valid.email && <strong>Write a valid email</strong>}
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData({...data, email: e.target.value})}
            onBlur={emailValidation}
            className={`${!valid.email ? "error" : ""}`}
            id="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>

        {/* Phone Number */}
        <div className={styles.field}>
          <label htmlFor="phone">Phone Number</label>
          {!valid.phone && <strong>This field is required</strong>}
          <input
            type="text"
            value={data.phone}
            onChange={(e) => setData({...data, phone: e.target.value})}
            onBlur={phoneValidation}
            className={`${!valid.phone ? "error" : ""}`}
            id="phone"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </section>
    )
  }
}