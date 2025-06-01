import React from 'react'
import { useState } from 'react'
const OtpVerification = () => {
  return (
   

          
        <div className=' bg-white    rounded-[30px] p-[20px]'>
          
        <div className=' flex flex-col  font-semibold  gap-[10px]'>
<p className='pb-10'>Request for generating OTP by SMS to your Aadhar Linked mobile number will be sent UIDAI - Please read teh terms and provide consent</p>

         
         <div className='flex flex-col gap-4 items-center  rounded-lg border-[#ebebea] border-[4px] p-[10px] '>
            <div className='pb-4'>
                <p className='font-semibold'>Consent Declaration for Generation of new PAN based on Aadhaar e-KYC details:</p>
                <p className='font-normal text-sm'><span className='mr-1'>1.</span>I have understood the process of authentication described herein and hereby grant consent for use of my Aadhaar identity information (through Aadhaar based e-KYC authentication facility of
UIDAI) for puropses of authentication of my identity in accordance with the provisions of the Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016 and allied rules and regulations notified there under, and for purposes of verifying and validating my credentials as maintained by the Income Tax Department.</p>
            </div>
            <div className='flex flex-start w-full'>
<input type='checkbox' className='mr-1'/><span>I have read the consent terms and agree to proceed further</span>
            </div>


         </div>
        
       
        </div>
        </div>
       
   
  )
}

export default OtpVerification