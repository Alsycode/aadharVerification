import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContext from "../context/context";
import { useContext } from "react";

const Step1 = () => {
    const navigate = useNavigate();
    const { step } = useContext(FormContext);
    console.log("steps",step)
  const [isChecked, setIsChecked] = useState(false);
  const [next, setNext] = useState(false);
 
  const [aadharNumber, setAadharNumber] = useState('');
  const [message, setMessage] = useState('');
 
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

 const checkHandler = () => {
    setIsChecked(!isChecked);
  };


 
  const { formData,setFormData } = useContext(FormContext)
  const handleInputChange = (event) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setAadharNumber(value);

      // Regular expression to match exactly 10 digits
      const regex = /^\d{12}$/;
      if (value.length === 0 || regex.test(value)) {
        if(value.length === 12 ){
            setNext(true)
        }
        setFormData((prev)=> ({...prev,aadharNumber:value}))
        setMessage(value.length === 10 ? 'Mobile number is valid.' : '');
      } else {
        setMessage('Mobile number must be exactly 12 digits.');
      }
    } else {
      setMessage('Only digits are allowed.');
    }
  };
  const handleNext = () => {
    const proceed = isChecked && next;
    console.log("proceed",proceed)
    if(proceed){
navigate("/otpVerification")
    }
  }


console.log("formData",formData)
  return (
    <div>
        <div class="flex items-center max-w-screen-lg mx-auto mb-[40px]">
     <div class="w-full">
      
        <div class="flex items-center w-full">
          <div
            class="w-7 h-7 z-50 shrink-0 mx-[-1px] border-4 border-indigo-500 flex items-center justify-center rounded-full">
            <span class="w-3 h-3 bg-indigo-500 rounded-full"></span>
          </div>
          <div class="w-full h-[3px] bg-indigo-500"></div>
        </div>
          <h6 class="text-sm font-semibold text-black mb-2 mr-4">Enter Aadhaar
Number</h6>
    </div>
    
        <div class="w-full">
      
        <div class="flex items-center w-full">
          <div
            class="w-7 h-7 z-50 shrink-0 mx-[-1px] border-4 border-indigo-500 flex items-center justify-center rounded-full">
            <span class="w-3 h-3 bg-indigo-500 rounded-full"></span>
          </div>
          <div class="w-full h-[3px] bg-indigo-500"></div>
        </div>
          <h6 class="text-sm font-semibold text-black mb-2 mr-4">OTP  Validation</h6>
      </div>
         <div class="w-full">
      
        <div class="flex items-center w-full">
          <div
            class="w-7 h-7 z-50 shrink-0 mx-[-1px] border-4 border-indigo-500 flex items-center justify-center rounded-full">
            <span class="w-3 h-3 bg-indigo-500 rounded-full"></span>
          </div>
          <div class="w-full h-[3px] bg-indigo-500"></div>
        </div>
          <h6 class="text-sm font-semibold text-black mb-2 mr-4">Validate Adhaar 
Details</h6>
      </div>
    <div class="w-full">
<div class="flex items-center w-full">
       <div class="w-7 h-7 shrink-0 mx-[-1px] bg-white border-[4px] border-indigo-500 flex items-center justify-center rounded-full">
          <span class="w-3 h-3 bg-indigo-500  rounded-full"></span>
          
        </div>
        
      </div>
            <h6 class="text-sm font-semibold text-black mb-2 mr-4">Select and Update
PAN Details</h6>
    </div>
      
    </div>
      <div className="pb-10 text-left text-[22px] font-normal font-poppins  w-full">Get new e-PAN</div>
     
      <div className=" bg-white     rounded-[30px] p-[26px]">
        <div className=" flex flex-col   gap-[10px]">
          <p className="pb-[43px] font-medium  text-base ">
            <b>Remember:</b>Its and Adhar e-KYC base process and
            allotment of PAN is free of cost.A pdf file of PAN will be generated
            and issued to the applicant.help?
          </p>
          <p className="font-medium  text-base text-start ">
            Enter your 12 didgit Adadhar Number for PAN allotment
            <span className="text-red-500">*</span>
          </p>
          <input
                   type="text"
                   name="aadharNumber"
        value={aadharNumber}
        onChange={handleInputChange}
        placeholder="aadhar number"
className="w-40 px-4 py-2 rounded-md border"
          />
 {message && (
        <p style={{ color: message === 'Mobile number is valid.' ? 'green' : 'red' }}>
          {message}</p>)}
          <div className="flex gap-4 items-center  pb-[30px]">
            <input
               type="checkbox"
        checked={isChecked}
        onChange={checkHandler}
           className="w-[20px] h-[20px]"
            />
            <span className="font-normal  text-base">
              I confirm that <span className="text-red-500">*</span>
            </span>
          </div>
          <ul className="font-normal text-base">
            <li>1. I have never been alloted a permanent account number</li>
            <li>2. My active mobile number is linked with aadhar.</li>
            <li>
              3. My complete dat eof birth (DD-MM-YYYY) is available on aadhar
              card.
            </li>
            <li>
              4. I am not minor as an application date of Permanant Account
              Number{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between mt-10 w-full">
        <button className="text-[#1c1b94] border font-medium  text-base border-black px-4 py-2 w-[156px] rounded-md">
          Cancel
        </button>
        <button
          className={` border font-medium  text-base w-[156px] border-black px-4 py-2  rounded-md ${
            next ? "text-[#1c1b94] " : "text-gray-300 border-gray-400 "
          }`}
          type="submit"
         
        onClick={handleNext}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step1;
