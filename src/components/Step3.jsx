import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Step3 = () => {
    const [timeLeft, setTimeLeft] = useState(60);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [inputReceived, setInputReceived] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(900);
    const [isChecked, setIsChecked] = useState(false);
    const [otp, setOtp] = useState(Array(7).fill(''));
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining((prevTime) => {
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
                setTimeLeft((prevTime) => prevTime - 1);
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
            e.key !== 'Backspace' &&
            e.key !== 'Delete' &&
            e.key !== 'Tab' &&
            !e.metaKey
        ) {
            e.preventDefault();
        }

        if (e.key === 'Delete' || e.key === 'Backspace') {
            const index = inputRefs.current.indexOf(e.target);
            if (index > 0) {
                setOtp((prevOtp) => [
                    ...prevOtp.slice(0, index - 1),
                    '',
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
        const text = e.clipboardData.getData('text');
        if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
            return;
        }
        const digits = text.split('');
        setOtp(digits);
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const resetOtp = () => {
        setTimeLeft(50);
        setIsTimerRunning(true);
    };

    const isOtpComplete = otp.every((digit) => digit !== '');
const handleNext = () => {
    toast.success("OTP Verification Succesful")
    navigate('/updatePan')
}
    return (
        <div className="flex flex-col items-center min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full max-w-screen-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-6 sm:mb-8 gap-4 sm:gap-0">
                {[
                    { label: 'Enter Aadhaar Number', active: false, completed: true },
                    { label: 'OTP Validation', active: false, completed: true },
                    { label: 'Validate Aadhaar Details', active: true },
                    { label: 'Select and Update PAN Details', active: false },
                ].map((step, index) => (
                    <div key={index} className="flex flex-col items-center w-full sm:w-1/4">
                        <div className="flex items-center w-full">
                            <div
                                className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 flex items-center justify-center rounded-full ${
                                    step.completed
                                        ? 'bg-indigo-500'
                                        : step.active
                                        ? 'border-4 border-indigo-500'
                                        : 'border-4 border-gray-300'
                                }`}
                            >
                                {step.completed ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 fill-white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                                    </svg>
                                ) : (
                                    <span
                                        className={`w-2 h-2 sm:w-3 sm:h-3 ${
                                            step.active ? 'bg-indigo-500' : 'bg-gray-300'
                                        } rounded-full`}
                                    ></span>
                                )}
                            </div>
                            <div
                                className={`w-full h-[3px] ${
                                    step.active || step.completed ? 'bg-indigo-500' : 'bg-gray-300'
                                }`}
                            ></div>
                        </div>
                        <h6 className="text-xs sm:text-sm font-semibold text-black mt-2 text-center">
                            {step.label}
                        </h6>
                    </div>
                ))}
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-normal font-poppins text-left w-full mb-4 sm:mb-6">
                OTP Validation
            </h2>
            <div className="bg-white rounded-3xl p-4 sm:p-6 w-full ">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm sm:text-base font-medium">Check your phone</p>
                        <p className="text-sm sm:text-base font-normal">
                            We have sent a One Time Password (OTP) in a text message (SMS) to your primary mobile number
                            +91 23********71 and primary email id avinash12345@nergymail.com
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm sm:text-base font-normal">
                            Enter the OTP <span className="text-red-500">*</span>
                        </p>
                        <form id="otp-form" className="flex gap-2 sm:gap-3 justify-start">
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
                                    className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg border border-gray-300 bg-white p-2 text-center text-lg sm:text-xl font-medium outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            ))}
                        </form>
                        <p className="text-sm sm:text-base font-medium">
                            OTP expires in {minutes}:{seconds.toString().padStart(2, '0')}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            className={`border font-normal text-sm sm:text-base w-32 sm:w-40 px-4 py-2 rounded-md ${
                                isTimerRunning ? 'text-gray-300 border-gray-400 cursor-not-allowed' : 'text-indigo-600 border-black'
                            }`}
                            onClick={resetOtp}
                            disabled={isTimerRunning}
                        >
                            Resend OTP
                        </button>
                        <span className="text-sm sm:text-base">({timeLeft}s)</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex flex-start items-center  gap-2 w-full ">
                <input
                    type="checkbox"
                    className="w-[10px] h-[10px] sm:w-4 sm:h-4 mt-1"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span className="text-sm sm:text-base font-normal">
                    I agree to validate my Aadhaar details with UIDAI. After successful validation of OTP entered by you,
                    the request for e-KYC Aadhaar data will be fetched from UIDAI.
                </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-6 w-full  gap-4 sm:gap-0">
                <button className="text-indigo-600 border border-black px-4 py-2 rounded-md text-sm sm:text-base font-medium  sm:w-40">
                    Cancel
                </button>
                <button
                    className={`border px-4 py-2 rounded-md text-sm sm:text-base font-medium  sm:w-40 ${
                        isChecked && isOtpComplete
                            ? 'text-indigo-600 border-black'
                            : 'text-gray-300 border-gray-400 cursor-not-allowed'
                    }`}
                    type="submit"
                    disabled={!isChecked || !isOtpComplete}
                    onClick={handleNext}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Step3;