import React from 'react';

const SelectInput = ({ 
  label, 
  name, 
  value, 
  onChange, 
  options = [],
  required = false,
  className = ""
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={name} className="block font-semibold mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
