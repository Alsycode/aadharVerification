import { useState, createContext } from "react";

export const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        { id: 1, name: 'Step 1', path: '/' },
        { id: 2, name: 'Step 2', path: '/otpVerification' },
        { id: 3, name: 'Step 3', path: '/otpValidation' },
        { id: 4, name: 'Step 4', path: '/updatePan' },
    ];

    return (
        <StepperContext.Provider value={{ currentStep, setCurrentStep, steps }}>
            {children}
        </StepperContext.Provider>
    );
};