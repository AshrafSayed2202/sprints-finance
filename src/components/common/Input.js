import React from 'react';
import PropTypes from 'prop-types';

// Reusable Input Component
const Input = ({
    label,
    type = 'text',
    name,
    value,
    onChange,
    onBlur,
    placeholder = '',
    errorMessage = '',
    touched = false,
    className = '',
}) => {
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
                    {label}
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300 ease-in-out ${touched && errorMessage ? 'border-red-500' : 'border-gray-300'} ${className}`}
            />
            {touched && errorMessage && (
                <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
        </div>
    );
};

// Prop Types for the Input Component
Input.propTypes = {
    label: PropTypes.string, // Input field label
    type: PropTypes.string, // Input field type (text, password, email, etc.)
    name: PropTypes.string.isRequired, // Name attribute for the input
    value: PropTypes.string.isRequired, // Input field value
    onChange: PropTypes.func.isRequired, // onChange handler
    onBlur: PropTypes.func, // onBlur handler for form validation
    placeholder: PropTypes.string, // Placeholder text
    errorMessage: PropTypes.string, // Validation error message
    touched: PropTypes.bool, // If the field has been touched (used for validation)
    className: PropTypes.string, // Additional CSS classes for customization
};

export default Input;
