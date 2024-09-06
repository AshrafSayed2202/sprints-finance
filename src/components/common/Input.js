import React from 'react';
import PropTypes from 'prop-types';

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
        <div className="mb-5">
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
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300 ease-in-out ${touched && errorMessage ? 'border-red-500' : 'border-gray-300'} ${className}`}
            />
            {touched && errorMessage && (
                <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string,
    touched: PropTypes.bool,
    className: PropTypes.string,
};

export default Input;
