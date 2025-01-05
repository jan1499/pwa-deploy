import React from 'react';

interface HeadingProps {
    text: string;
    className?: string;
    subText?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, className, subText }) => {
    return (
        <div className={` ${className}`} >
            <h1 className='fs-3 p-0 m-0 mb-1'>{text}</h1>
            {subText && <p className='text-grey p-0 m-0 lh-sm'>{subText}</p>}
        </div>
    );
};

export default Heading;
