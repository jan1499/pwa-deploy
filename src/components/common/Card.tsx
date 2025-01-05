import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`card custom-card ${className}`}>{children}</div>;
};

export const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`card-header ${className}`}>{children}</div>;
};

export const CardBody: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`card-body ${className}`}>{children}</div>;
};

export const CardFooter: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`card-footer ${className}`}>{children}</div>;
};
