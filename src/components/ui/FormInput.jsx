import React from 'react';

export default function FormInput({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  isTextArea = false,
  rows = 4,
  icon,
  maxLength, 
  className = '',
  minNumber = 0,
  maxNumber = Infinity
}) {
  return (
    <div className={`mb-3 ${className}`}>
      <label htmlFor={label} className="form-label">{label}</label>
      <div className="position-relative">
        {icon && (
          <div className="position-absolute top-50 start-0 translate-middle-y ps-3">
            {icon}
          </div>
        )}
        {isTextArea ? (
          <textarea
            value={value}
            onChange={onChange}
            rows={rows}
            id={label}
            className={`form-control ${icon ? 'ps-5' : ''}`}
            placeholder={placeholder}
            maxLength={200}
            style={{ resize: 'none' }}
          />
        ) : (
          <input
            type={type}
            value={value}
            id={label}
            onChange={onChange}
            className={`form-control text-capitalize ${icon ? 'ps-5' : ''}`}
            placeholder={placeholder}
            maxLength={maxLength}
            min={minNumber}
            max={maxNumber}
          />
        )}
      </div>
    </div>
  );
}