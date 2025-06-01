// src/components/Stepper.js
import React, { useContext } from 'react';
import { TiTick } from 'react-icons/ti';
import './stepper.css';

import FormContext from '../../context/context';

const Stepper = () => {
  const { steps, currentStep, complete } = useContext(FormContext);

  return (
    <div className="flex items-center max-w-screen-lg mx-auto">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber || complete;

        return (
          <div key={step} className="w-full">
            <div className="flex items-center w-full">
              <div
                className={`w-7 h-7 shrink-0 mx-[-1px] flex items-center justify-center rounded-full ${
                  isCompleted
                    ? 'bg-indigo-500'
                    : isActive
                    ? 'bg-indigo-500 border-[4px] border-indigo-500'
                    : 'bg-white border-[4px] border-indigo-500'
                }`}
              >
                {isCompleted ? (
                  <TiTick className="w-4 h-4 text-white" />
                ) : isActive ? (
                  <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                ) : (
                  <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-full h-[3px] ${
                    isCompleted ? 'bg-indigo-500' : 'bg-gray-300'
                  }`}
                ></div>
              )}
            </div>
            <h6 className="text-sm font-semibold text-black mb-2 mr-4">{step}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;