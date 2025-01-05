import React from 'react';

interface ErrorProps {
  message: string;
  className?: string; 
}

const Error: React.FC<ErrorProps> = ({ message, className }) => {
  return (
    <div className={`alert text-danger text-start p-0 fs-12 ${className}`} role="alert">
      {message}
    </div>
  );
};

export default Error;
