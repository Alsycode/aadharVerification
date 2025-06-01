import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Step2 = () => {
      const navigate = useNavigate();
      const [isChecked, setIsChecked] = useState(false);
       const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // Handle Continue button click
  const handleContinue = () => {
    if (isChecked) {
      navigate('/otpValidation');
    }
  };
  return (
    <div>
          <div class="flex items-center max-w-screen-lg mx-auto mb-[60px]">
    <div class="w-full">
        <div class="flex items-center w-full">
        <div class="w-7 h-7 shrink-0 mx-[-1px] bg-indigo-500 flex items-center justify-center rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path
              d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
              data-original="#000000" />
          </svg>
        </div>
        <div class="w-full h-[3px] bg-indigo-500"></div>
      </div>
        <h6 class="text-bases font-semibold text-black mb-2 mr-4">Enter Aadhaar
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
          <h6 class="text-sm font-semibold text-black mb-2 ">OTP  Validation</h6>
      </div>
         <div class="w-full">
      
        <div class="flex items-center w-full">
          <div
            class="w-7 h-7 z-50 shrink-0 mx-[-1px] border-4 border-indigo-500 flex items-center justify-center rounded-full">
            <span class="w-3 h-3 bg-indigo-500 rounded-full"></span>
          </div>
          <div class="w-full h-[3px] bg-indigo-900"></div>
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
         <div className='pb-10 text-left font-normal text-base  w-full'>OTP Validation</div>

  <div className=' bg-white    rounded-[30px] p-[23px]'>
          
        <div className=' flex flex-col  font-semibold  gap-[10px]'>
<p className='mb-[15px] font-medium text-base'>Request for generating OTP by SMS to your Aadhar Linked mobile number will be sent UIDAI - Please read teh terms and provide consent</p>

         
         <div className='flex flex-col gap-4 items-center  rounded-lg border-[#ebebea] border-[4px] p-[10px] '>
            <div className='pb-4'>
                <p className='font-medium text-base'>Consent Declaration for Generation of new PAN based on Aadhaar e-KYC details:</p>
                <p className='font-normal text-base'><span className='mr-1'>1.</span>I have understood the process of authentication described herein and hereby grant consent for use of my Aadhaar identity information (through Aadhaar based e-KYC authentication facility of
UIDAI) for puropses of authentication of my identity in accordance with the provisions of the Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016 and allied rules and regulations notified there under, and for purposes of verifying and validating my credentials as maintained by the Income Tax Department.</p>
            </div>
            <div className='flex items-center flex-start w-full'>
<input type='checkbox' onChange={handleChange} className='mr-1 w-[20px] h-[20px]'/><span className='text-base font-normal'>I have read the consent terms and agree to proceed further</span>
            </div>


         </div>
        
       
        </div>
        </div>
   <div className="flex justify-between mt-10 w-full">
         <button className="text-[#1c1b94] border font-medium text-base border-black px-4 py-2 w-[156px] rounded-md">
                    Cancel
                </button>
        <button
          className={`border font-medium text-base w-[156px] border-black px-4 py-2 rounded-md ${
            isChecked ? "text-[#1c1b94]" : "text-gray-300 border-gray-400 cursor-not-allowed"
          }`}
          type="button"
          disabled={!isChecked}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>

    </div>
  )
}

export default Step2