import React from 'react';
import PropTypes from 'prop-types';
import "./Button.scss";

const Button = ({children}) => {
    return (
        <button>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Button;