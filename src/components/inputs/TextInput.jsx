import React from 'react';

const TextInput = ({ 
  label, 
  name, 
  value, 
  onChange, 
  required = false,
  type = "text",
  placeholder = "",
  className = ""
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={name} className="block font-semibold mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
    </div>
  );
};

export default TextInput;
