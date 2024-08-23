import { useState } from 'react';

const useFillColor = (base, primary) => {
    const [fillColor, setFillColor] = useState(base);

    const handleMouseOver = () => {
        setFillColor(primary);
    }

    const handleMouseLeave = () => {
        setFillColor(base);
    }

    return {
        fillColor,
        handleMouseOver,
        handleMouseLeave
    };
};

export default useFillColor;
