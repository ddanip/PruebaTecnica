import React from 'react';
import "./Image.scss";

const Image = ({ src, alt }) => {
    return <img src={src} alt={alt} />
};


export default Image;