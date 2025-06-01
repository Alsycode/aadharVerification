import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormContext from "../context/context";
import { toast } from 'react-toastify';
const Step1 = () => {
    const navigate = useNavigate();
    const { step, formData, setFormData } = useContext(FormContext);
    console.log("steps", step);
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

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setAadharNumber(value);
            const regex = /^\d{12}$/;
            if (value.length === 0 || regex.test(value)) {
                if (value.length === 12) {
                    setNext(true);
                }
                setFormData((prev) => ({ ...prev, aadharNumber: value }));
                setMessage(value.length === 12 ? 'Aadhaar number is valid.' : '');
            } else {
                setMessage('Aadhaar number must be exactly 12 digits.');
            }
        } else {
            setMessage('Only digits are allowed.');
        }
    };

    const handleNext = () => {
        const proceed = isChecked && next;
        toast.success("Adhar number submitted")
        console.log("proceed", proceed);
        if (proceed) {
            navigate("/otpVerification");
        }
    };

    console.log("formData", formData);

    return (
        <div className="flex flex-col items-center min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full max-w-screen-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-6 sm:mb-8 gap-4 sm:gap-0">
                {[
                    { label: "Enter Aadhaar Number", active: true },
                    { label: "OTP Validation", active: false },
                    { label: "Validate Aadhaar Details", active: false },
                    { label: "Select and Update PAN Details", active: false },
                ].map((step, index) => (
                    <div key={index} className="flex flex-col items-center w-full sm:w-1/4">
                        <div className="flex items-center w-full">
                            <div className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 border-4 ${step.active ? 'border-indigo-500' : 'border-gray-300'} flex items-center justify-center rounded-full`}>
                                <span className={`w-2 h-2 sm:w-3 sm:h-3 ${step.active ? 'bg-indigo-500' : 'bg-gray-300'} rounded-full`}></span>
                            </div>
                            <div className={`w-full h-[3px] ${step.active ? 'bg-indigo-500' : 'bg-gray-300'}`}></div>
                        </div>
                        <h6 className="text-xs sm:text-sm font-semibold text-black mt-2 text-center">{step.label}</h6>
                    </div>
                ))}
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-normal font-poppins text-left w-full mb-4 sm:mb-6">Get new e-PAN</h2>
            <div className="bg-white rounded-3xl p-4 sm:p-6 w-full ">
                <div className="flex flex-col gap-4">
                    <p className="text-sm sm:text-base font-medium">
                        <b>Remember:</b> This is an Aadhaar e-KYC based process and allotment of PAN is free of cost. A PDF file of PAN will be generated and issued to the applicant. Help?
                    </p>
                    <p className="text-sm sm:text-base font-medium text-start">
                        Enter your 12-digit Aadhaar Number for PAN allotment
                        <span className="text-red-500">*</span>
                    </p>
                    <input
                        type="text"
                        name="aadharNumber"
                        value={aadharNumber}
                        onChange={handleInputChange}
                        placeholder="Aadhaar number"
                        className="w-40 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                    />
                    {message && (
                        <p className="text-sm" style={{ color: message === 'Aadhaar number is valid.' ? 'green' : 'red' }}>
                            {message}
                        </p>
                    )}
                    <div className="flex gap-4 items-center">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={checkHandler}
                            className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                        <span className="text-sm sm:text-base font-normal">
                            I confirm that <span className="text-red-500">*</span>
                        </span>
                    </div>
                    <ul className="text-sm sm:text-base font-normal list-disc pl-5">
                        <li>I have never been allotted a permanent account number</li>
                        <li>My active mobile number is linked with Aadhaar.</li>
                        <li>My complete date of birth (DD-MM-YYYY) is available on Aadhaar card.</li>
                        <li>I am not a minor as of the application date for Permanent Account Number</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-6 w-full  gap-4 sm:gap-0">
                <button className="text-indigo-600 border border-black px-4 py-2 rounded-md text-sm sm:text-base font-medium  sm:w-40">
                    Cancel
                </button>
                <button
                    className={`border px-4 py-2 rounded-md text-sm sm:text-base font-medium  sm:w-40 ${next ? 'text-indigo-600 border-black' : 'text-gray-300 border-gray-400'}`}
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