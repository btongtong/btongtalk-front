import { useState } from 'react';

const useFillColor = () => {
    const [fillColor, setFillColor] = useState('var(--gray-60)');

    const handleMouseOver = () => {
        setFillColor('var(--primary-color)');
    }

    const handleMouseLeave = () => {
        setFillColor('var(--gray-60)');
    }

    return {
        fillColor,
        handleMouseOver,
        handleMouseLeave
    };
};

export default useFillColor;
