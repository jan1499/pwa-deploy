import React from 'react';

interface MainHeadingProps {
    text: string;
    className?: string;
    subText?: string;
}

const MainHeading: React.FC<MainHeadingProps> = ({ text, className, subText }) => {
    return (
        <div className={`main-heading ${className}`} >
            <h1 className='heading p-0 m-0'>{text}</h1>
            {subText && <p className='sub-text p-0 m-0 d-none d-lg-flex'>{subText}</p>}
        </div>
    );
};
export default MainHeading;
