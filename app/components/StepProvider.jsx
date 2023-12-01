"use client";

import { useState, createContext } from "react";

const StepContext = createContext(1);
const SetStepContext = createContext(1);


export default function StepProvider({children}) {
  const [step, setStep] = useState(1);

  return (
    <StepContext.Provider value={step}>
      <SetStepContext.Provider value={setStep}>
        {children}
      </SetStepContext.Provider>
    </StepContext.Provider>
  )
}

export {StepContext, SetStepContext};