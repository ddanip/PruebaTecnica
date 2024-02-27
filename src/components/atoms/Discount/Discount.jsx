import React from 'react';
import PropTypes from 'prop-types';
import "./Discount.scss";

const Discount = ({children}) => {
    return (
        <div className='discount'>
            <p>Hasta</p>
            {children}
            <p>Dscto.</p>
        </div>
    );
};

Discount.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Discount;