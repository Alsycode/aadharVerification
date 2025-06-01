import React from 'react'
import { useState, useContext } from 'react'
import FormContext from '../context/context'

const Step4 = () => {
    const [isChecked, setIsChecked] = useState(false)
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    console.log("checkLog", isChecked)
    const { formData, step } = useContext(FormContext);
    console.log("formdata", formData)

    return (
        <div className='min-w-[80%] font-poppins'>
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
        <h6 class="text-sm font-semibold text-black mb-2 mr-4">Enter Aadhaar
Number</h6>
    </div>
    
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
        <h6 class="text-sm font-semibold text-black mb-2">OTP  Validation</h6>
      </div>
         <div class="w-full">
        <div class="flex items-center w-full">
        <div class="w-7 h-7 shrink-0 mx-[-1px] bg-indigo-500 flex items-center justify-center rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path
              d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
              data-original="#000000" />
          </svg>
        </div>
        <div class="w-full h-[3px] bg-indigo-900"></div>
      </div>
        <h6 class="text-sm font-semibold text-black mb-2">OTP  Validation</h6>
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
           <div className='pb-10 font-medium text-base text-left w-full'>Your personal data based on Aadhaar e-KYC</div>
            <div className='bg-white '>
                <div className='w-[100%] flex border-b-4 border-[#ebebea] py-4 px-4'>
                    <div className='w-[50%] flex font-medium text-base items-center'>
                        Photo
                    </div>
                    <div className='w-[50%]'>
                        <div className='h-[100px] w-[100px] rounded-full bg-gray-400'>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] flex border-b-4 border-[#ebebea] py-4 px-4'>
                    <div className='w-[50%] flex font-medium text-base items-center'>
                        Aadhar Number
                    </div>
                    <div className='w-[50%] font-medium text-base'>
                        xxxx xxxx x545
                    </div>
                </div>
                <div className='w-[100%] flex border-b-4 border-[#ebebea] py-4 px-4'>
                    <div className='w-[50%] flex items-center font-medium text-base'>
                        Name
                    </div>
                    <div className='w-[50%] font-medium text-base'>
                        xxx
                    </div>
                </div>
                <div className='w-[100%] flex border-b-4 border-[#ebebea] py-4 px-4'>
                    <div className='w-[50%] flex items-center font-medium text-base'>
                        Date of birth
                    </div>
                    <div className='w-[50%] font-medium text-base'>
                        xxx
                    </div>
                </div>
            </div>
            <div className='mt-[20px] flex gap-2 justify-start items-center relative'>
                <input
                    type='checkbox'
                    className='top-[5px] absolute  w-[20px] h-[20px]'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <div><span className='ml-[25px] font-normal text-base'>I accept that</span>
                <span className='text-red-500'> *</span></div>
                
            </div>
            <div className='mt-[20px] font-normal text-base'>
                <ul>
                    <li className='flex'>
                        <div>1.</div>
                        <div>
                            The above details are correct and I hereby certify that I do not have any PAN allotted to me.
                            In case I am found to be in possession of more than one PAN then I shall be liable for penalty of Rs. 10,000/- under section 272B(1).
                        </div>
                    </li>
                    <li className='flex'>
                        <div>2.</div>
                        <div>
                            I agree that Permanent Account Number may be allotted based on Aadhaar as per with Rule 114 (1B) of Income-Tax Rules 1962
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between mt-10 w-full">
                <button className="text-[#1c1b94] border text-base font-medium border-black px-4 py-2 w-[156px] rounded-md">
                    Cancel
                </button>
                <button
                    className={`border font-medium text-base w-[156px]  border-black px-4 py-2 rounded-md ${
                        isChecked ? "text-[#1c1b94]" : "text-gray-300 border-gray-400 cursor-not-allowed"
                    }`}
                    type="submit"
                    disabled={!isChecked}
                    onClick={() => navigate("/updatePan")}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Step4