import React from 'react';

export default function StepIndicator({ steps, currentStep }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="d-flex flex-column align-items-center">
            <div
              className={`rounded-circle d-flex justify-content-center align-items-center ${
                index <= currentStep ? 'bg-primary text-white' : 'bg-secondary text-light'
              }`}
              style={{ width: '40px', height: '40px' }}
            >
              {index + 1}
            </div>
            <span className="small mt-2 text-center">{step.title}</span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`mx-2`}
              style={{
                width: '80px',
                height: '4px',
                backgroundColor: index < currentStep ? '#0d6efd' : '#dee2e6', // Azul o gris claro
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
