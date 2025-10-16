import React from 'react';

const TextAreaInput = ({ 
  label, 
  name, 
  value, 
  onChange, 
  required = false,
  placeholder = "",
  rows = 4,
  className = ""
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={name} className="block font-semibold mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
      />
    </div>
  );
};

export default TextAreaInput;
