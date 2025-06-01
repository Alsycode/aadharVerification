import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
const Step2 = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleContinue = () => {
        if (isChecked) {
            toast.success("Consent submitted")
            navigate('/otpValidation');
        }
    };
s
    return (
        <div className="flex flex-col items-center  mx-auto px-4 sm:px-6 lg:px-4 py-6 w-full max-w-screen-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-6 sm:mb-8 gap-4 sm:gap-0">
                {[
                    { label: "Enter Aadhaar Number", active: true, completed: true },
                    { label: "OTP Validation", active: true },
                    { label: "Validate Aadhaar Details", active: false },
                    { label: "Select and Update PAN Details", active: false },
                ].map((step, index) => (
                    <div key={index} className="flex flex-col items-center w-full sm:w-1/4">
                        <div className="flex items-center w-full">
                            <div className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 flex items-center justify-center rounded-full ${step.completed ? 'bg-indigo-500' : step.active ? 'border-4 border-indigo-500' : 'border-4 border-gray-300'}`}>
                                {step.completed ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                                    </svg>
                                ) : (
                                    <span className={`w-2 h-2 sm:w-3 sm:h-3 ${step.active ? 'bg-indigo-500' : 'bg-gray-300'} rounded-full`}></span>
                                )}
                            </div>
                            <div className={`w-full h-[3px] ${step.active || step.completed ? 'bg-indigo-500' : 'bg-gray-300'}`}></div>
                        </div>
                        <h6 className="text-xs sm:text-sm font-semibold text-black mt-2 text-center">{step.label}</h6>
                    </div>
                ))}
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-normal font-poppins text-left w-full mb-4 sm:mb-6">OTP Validation</h2>
            <div className="bg-white rounded-3xl p-4 sm:p-6 w-full ">
                <div className="flex flex-col gap-4">
                    <p className="text-sm sm:text-base font-medium">
                        Request for generating OTP by SMS to your Aadhaar-linked mobile number will be sent to UIDAI. Please read the terms and provide consent.
                    </p>
                    <div className="flex flex-col gap-4 rounded-lg border border-gray-200 p-4">
                        <div>
                            <p className="text-sm sm:text-base font-medium">Consent Declaration for Generation of new PAN based on Aadhaar e-KYC details:</p>
                            <p className="text-sm sm:text-base font-normal">
                                <span className="mr-1">1.</span>I have understood the process of authentication described herein and hereby grant consent for use of my Aadhaar identity information (through Aadhaar-based e-KYC authentication facility of UIDAI) for purposes of authentication of my identity in accordance with the provisions of the Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016 and allied rules and regulations notified thereunder, and for purposes of verifying and validating my credentials as maintained by the Income Tax Department.
                            </p>
                        </div>
                        <div className="flex items-center w-full">
                            <input
                                type="checkbox"
                                onChange={handleChange}
                                className="mr-2 w-5 h-5 sm:w-6 sm:h-6"
                                checked={isChecked}
                            />
                            <span className="text-sm sm:text-base font-normal">
                                I have read the consent terms and agree to proceed further
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-6 w-full max-w-lg gap-4 sm:gap-0">
                <button className="text-indigo-600 border border-black px-4 py-2 rounded-md text-sm sm:text-base font-medium w-full sm:w-40">
                    Cancel
                </button>
                <button
                    className={`border px-4 py-2 rounded-md text-sm sm:text-base font-medium w-full sm:w-40 ${isChecked ? 'text-indigo-600 border-black' : 'text-gray-300 border-gray-400 cursor-not-allowed'}`}
                    type="button"
                    disabled={!isChecked}
                    onClick={handleContinue}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Step2;