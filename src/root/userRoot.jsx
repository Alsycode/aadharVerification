import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Step1 from '../components/Step1'
import Step2 from '../components/Step2'
import Step3 from '../components/Step3'
import Step4 from '../components/Step4'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Stepper from '../components/stepper/Stepper'
// import { useContext } from 'react'
 import FormContext from "../context/context"
//  import StepperProvider from "../context/stepperContexst"
const userRoot = () => {
    // const { updateFormData, step } = useContext(FormContext);
    // console.log("step",step)
const [isChecked, setIsChecked]= useState(false)
const [formData,setFormData] = useState({
    aadharNumber:"",
    otp:""
})
   const steps = ['Detail Entry', 'OTP Verification', 'OTP Validation', 'Update Details'];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setComplete(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  return (
    <FormContext.Provider value={{formData, setFormData,steps, currentStep, complete, nextStep, prevStep}}>
          <div className='flex flex-col bg-[#efeeef] justify-center items-center min-h-screen  lg:px-[80px]  md:px-[40px] px-[10px] py-[60px]'>
         
{/* <Stepper/> */}
       
       <Outlet/>
   
  
    </div>
    <ToastContainer/>
    </FormContext.Provider>
     
  )
}

export default userRoot