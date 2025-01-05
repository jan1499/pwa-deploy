import React from 'react';

interface HeadProps {
    text: string;
    className?: string;
    subClassName?: string;
    subText?: string;
}

const Head: React.FC<HeadProps> = ({ text, className, subText ,subClassName}) => {
    return (
        <div>
            <h1 className={`p-0 m-0 ${className}`}>{text}</h1>
            {subText && <p className={`p-0 m-0 lh-sm ${subClassName}`}>{subText}</p>}
        </div>
    );
};

export default Head;
