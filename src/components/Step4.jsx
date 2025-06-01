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
            <p className='pb-[20px] font-normal text-[22px]'>Your personal data based on Aadhaar e-KYC</p>
            <div className='bg-white '>
                <div className='w-[100%] flex border-b-4 border-[#ebebea] py-4 px-4'>
                    <div className='w-[50%] flex font-medium text-[22px] items-center'>
                        Photo
                    </div>
                    <div className='w-[50%]'>
                        <div className='h-[100px] w-[100px] rounded-full bg-gray-400'>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] flex border-b-4 border-[#ebebea] py-4 px-4'>
                    <div className='w-[50%] flex font-medium text-[22px] items-center'>
                        Aadhar Number
                    </div>
                    <div className='w-[50%] font-medium text-[22px]'>
                        xxxx xxxx x545
                    </div>
                </div>
                <div className='w-[100%] flex border-b-4 border-[#ebebea] py-4 px-4'>
                    <div className='w-[50%] flex items-center font-medium text-[22px]'>
                        Name
                    </div>
                    <div className='w-[50%] font-medium text-[22px]'>
                        xxx
                    </div>
                </div>
                <div className='w-[100%] flex border-b-4 border-[#ebebea] py-4 px-4'>
                    <div className='w-[50%] flex items-center font-medium text-[22px]'>
                        Date of birth
                    </div>
                    <div className='w-[50%] font-medium text-[22px]'>
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
                <div><span className='ml-[25px] font-normal text-[24px]'>I accept that</span>
                <span className='text-red-500'> *</span></div>
                
            </div>
            <div className='mt-[20px] font-normal text-[20px]'>
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
                <button className="text-[#1c1b94] border text-[24px] font-medium border-black px-4 py-2 w-[156px] rounded-md">
                    Cancel
                </button>
                <button
                    className={`border font-medium text-[24px] w-[156px]  border-black px-4 py-2 rounded-md ${
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