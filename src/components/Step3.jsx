import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Step3 = () => {
    const [timeLeft, setTimeLeft] = useState(60);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [inputReceived, setInputReceived] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(900); 
    const [isChecked, setIsChecked] = useState(false);
    const [otp, setOtp] = useState(Array(7).fill(""));
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining(prevTime => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(timerInterval);
                    console.log('Countdown complete!');
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    useEffect(() => {
        if (isTimerRunning && timeLeft > 0) {
            const timerID = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);

            return () => clearInterval(timerID);
        }
    }, [isTimerRunning, timeLeft]);

    useEffect(() => {
        if (timeLeft === 0) {
            setIsTimerRunning(false);
        }
    }, [timeLeft]);

    useEffect(() => {
        setIsTimerRunning(true);
    }, []);

    const handleKeyDown = (e) => {
        if (
            !/^[0-9]{1}$/.test(e.key) &&
            e.key !== "Backspace" &&
            e.key !== "Delete" &&
            e.key !== "Tab" &&
            !e.metaKey
        ) {
            e.preventDefault();
        }

        if (e.key === "Delete" || e.key === "Backspace") {
            const index = inputRefs.current.indexOf(e.target);
            if (index > 0) {
                setOtp((prevOtp) => [
                    ...prevOtp.slice(0, index - 1),
                    "",
                    ...prevOtp.slice(index),
                ]);
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handleInput = (e) => {
        const { target } = e;
        const index = inputRefs.current.indexOf(target);
        if (target.value) {
            setOtp((prevOtp) => [
                ...prevOtp.slice(0, index),
                target.value,
                ...prevOtp.slice(index + 1),
            ]);
            if (index < otp.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleFocus = (e) => {
        e.target.select();
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData("text");
        if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
            return;
        }
        const digits = text.split("");
        setOtp(digits);
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const resetOtp = () => {
        setTimeLeft(50);
        setIsTimerRunning(true);
    };

    const isOtpComplete = otp.every(digit => digit !== "");

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
            <div className='pb-10 font-medium text-base text-left w-full'>OTP Validation</div>
            <div className='bg-white rounded-[30px] p-[20px]'>
                <div className='flex flex-col font-semibold gap-[10px]'>
                    <div className='flex flex-col gap-4 rounded-lg p-[10px]'>
                        <div className='pb-4'>
                            <p className='font-medium text-base'>Check your phone</p>
                            <p className='font-normal text-base'>We have sent a One Time Password (OTP) in a text message (SMS) to your Primary mobile number +91 23********71 and primary email id avinash12345@nergymail.com</p>
                        </div>
                        <div className=''>
                            <p className='font-normal text-base'>Enter the OTP <span className='text-red-500'>*</span></p>
                            <section className="bg-white py-10 dark:bg-dark">
                                <div className="container">
                                    <form id="otp-form" className="flex gap-2">
                                        {otp.map((digit, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                maxLength={1}
                                                value={digit}
                                                onChange={handleInput}
                                                onKeyDown={handleKeyDown}
                                                onFocus={handleFocus}
                                                onPaste={handlePaste}
                                                ref={(el) => (inputRefs.current[index] = el)}
                                                className="shadow-xs flex w-[40px] h-[40px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
                                            />
                                        ))}
                                    </form>
                                </div>
                            </section>
                            <p className='font-medium text-base'>OTP expires in {minutes}.{seconds} min</p>
                        </div>
                        <div className='flex items-center flex-start gap-2'>
                            <button
                                className={`border font-normal text-base w-40 border-black px-4 py-2 rounded-md ${
                                    isTimerRunning ? "text-gray-300 border-gray-400" : "text-[#1c1b94]"
                                }`}
                                onClick={resetOtp}
                            >
                                Resend OTP
                            </button>
                            <span>({timeLeft})</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[20px] flex gap-2 items-center relative'>
                <input
                    type='checkbox'
                    className='top-[5px] absolute w-[20px] h-[20px]'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span className='ml-[25px] font-normal text-base'>I agree to validate my Aadhaar details with UIDAI. After successful validation of OTP entered by you, the request for e-KYC Aadhaar data will be fetched from UIDAI</span>
            </div>
            <div className="flex justify-between mt-10 w-full">
                <button className="text-[#1c1b94] border font-medium text-base border-black px-4 py-2 w-[156px] rounded-md">
                    Cancel
                </button>
                <button
                    className={`border font-medium text-base w-[156px] border-black px-4 py-2 rounded-md ${
                        isChecked && isOtpComplete ? "text-[#1c1b94]" : "text-gray-300 border-gray-400 cursor-not-allowed"
                    }`}
                    type="submit"
                    disabled={!isChecked || !isOtpComplete}
                    onClick={() => navigate("/updatePan")}
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default Step3