import React from 'react';
import { useState, useContext } from 'react';
import FormContext from '../context/context';
import { useNavigate } from 'react-router-dom';

const Step4 = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const { formData, step } = useContext(FormContext);
    console.log("checkLog", isChecked);
    console.log("formdata", formData);
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full max-w-screen-xl font-poppins">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-6 sm:mb-8 gap-4 sm:gap-0">
                {[
                    { label: 'Enter Aadhaar Number', active: false, completed: true },
                    { label: 'OTP Validation', active: false, completed: true },
                    { label: 'Validate Aadhaar Details', active: false, completed: true },
                    { label: 'Select and Update PAN Details', active: true },
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
            <h2 className="text-md sm:text-xl md:text-xl font-normal text-left w-full mb-4 sm:mb-6">
                Your personal data based on Aadhaar e-KYC
            </h2>
            <div className="bg-white rounded-3xl p-4 sm:p-6 w-full ">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row border-b-2 border-gray-200 py-2">
                        <div className="w-full sm:w-1/2 flex font-medium text-sm sm:text-base items-center">
                            Photo
                        </div>
                        <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gray-400"></div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row border-b-2 border-gray-200 py-2">
                        <div className="w-full sm:w-1/2 flex font-medium text-sm sm:text-base items-center">
                            Aadhaar Number
                        </div>
                        <div className="w-full sm:w-1/2 font-medium text-sm sm:text-base mt-2 sm:mt-0">
                            xxxx xxxx x545
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row border-b-2 border-gray-200 py-2">
                        <div className="w-full sm:w-1/2 flex font-medium text-sm sm:text-base items-center">
                            Name
                        </div>
                        <div className="w-full sm:w-1/2 font-medium text-sm sm:text-base mt-2 sm:mt-0">
                            xxx
                        </div>
                    </div>
                    <div className="flex flex-col  sm:flex-row border-b-2 border-gray-200 py-2">
                        <div className="w-full sm:w-1/2 flex font-medium text-sm sm:text-base items-center">
                            Date of Birth
                        </div>
                        <div className="w-full sm:w-1/2 font-medium text-sm sm:text-base mt-2 sm:mt-0">
                            xxx
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex flex-start items-center gap-2 w-full ">
                <input
                    type="checkbox"
                    className="w-5 h-5 sm:w-4 sm:h-4 mt-1"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span className="text-sm sm:text-base font-normal">
                    I accept that <span className="text-red-500">*</span>
                </span>
            </div>
            <div className="mt-4 w-full  text-sm sm:text-base font-normal">
                <ul className="list-decimal pl-5">
                    <li className="mb-2">
                        The above details are correct and I hereby certify that I do not have any PAN allotted to me.
                        In case I am found to be in possession of more than one PAN then I shall be liable for penalty of Rs. 10,000/- under section 272B(1).
                    </li>
                    <li>
                        I agree that Permanent Account Number may be allotted based on Aadhaar as per with Rule 114 (1B) of Income-Tax Rules 1962
                    </li>
                </ul>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-6 w-full  gap-4 sm:gap-0">
                <button className="text-indigo-600 border border-black px-4 py-2 rounded-md text-sm sm:text-base font-medium  sm:w-40">
                    Cancel
                </button>
                <button
                    className={`border px-4 py-2 rounded-md text-sm sm:text-base font-medium  sm:w-40 ${
                        isChecked ? 'text-indigo-600 border-black' : 'text-gray-300 border-gray-400 cursor-not-allowed'
                    }`}
                    type="submit"
                    disabled={!isChecked}
                    onClick={() => navigate('/updatePan')}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Step4;