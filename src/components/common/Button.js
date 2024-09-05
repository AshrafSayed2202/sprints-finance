import React from 'react';
import PropTypes from 'prop-types';

// Reusable Button Component
const Button = ({ text, onClick, type = 'button', disabled = false, className = '' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        >
            {text}
        </button>
    );
};

// Prop Types for the Button Component
Button.propTypes = {
    text: PropTypes.string.isRequired, // Text to display on the button
    onClick: PropTypes.func, // Click handler function
    type: PropTypes.oneOf(['button', 'submit', 'reset']), // Button type
    disabled: PropTypes.bool, // Disabled state
    className: PropTypes.string, // Additional CSS classes
};

export default Button;
