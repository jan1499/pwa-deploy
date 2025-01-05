import React from 'react';

interface SmallHeadingProps {
    text: string;
    className?: string;
    subText?: string;
}

const SmallHeading: React.FC<SmallHeadingProps> = ({ text, className, subText }) => {
    return (
        <div className={`small-heading ${className}`} >
            <h1 className='heading p-0 m-0'>{text}</h1>
            {subText && <p className='sub-text p-0 m-0'>{subText}</p>}
        </div>
    );
};

export default SmallHeading;
