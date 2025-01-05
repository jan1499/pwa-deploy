import React, { ReactNode, MouseEventHandler, Ref } from 'react';

interface ButtonProps {
  id?: string;
  children?: ReactNode;
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  variant?: 'light' | 'gradient' | 'outline' | 'ghost';
  radius?: string;
  size?: 'sm' | 'md' | 'lg';
  width?: string;
  shadow?: string;
  disabled?: boolean;
  labelPosition?: string;
  labelIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  className?: string;
  innerRef?: Ref<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  id,
  children,
  text = '',
  type = 'button',
  color = 'primary',
  variant,
  radius = '',
  size = 'md',
  width,
  shadow,
  disabled = false,
  labelPosition,
  labelIcon,
  onClick,
  isLoading = false,
  className = '',
  innerRef
}) => {
  const getButtonVariantClass = (variant: string | undefined, color: string) => {
    switch (variant) {
      case 'light':
        return `btn-${color}-light`;
      case 'gradient':
        return `btn-${color}-gradient`;
      case 'outline':
        return `btn-outline-${color}`;
      case 'ghost':
        return `btn-${color}-ghost`;
      default:
        return `btn-${color}`;
    }
  };

  return (
    <span className={`${isLoading ? 'placeholder-glow' : ''}`}>
      <button
        id={id}
        {...(innerRef && { ref: innerRef })}
        onClick={onClick}
        type={type}
        disabled={disabled || isLoading ? true : false}
        className={`btn btn-${size} ${width ? 'btn-w-' + width : ''
          } ${getButtonVariantClass(variant, color)} ${radius ? 'rounded-' + radius : ''
          } ${shadow ? 'shadow-' + shadow : ''} ${isLoading ? 'placeholder' : ''
          } ${labelIcon ? 'label-btn' : ''} ${labelIcon && labelPosition === 'end' ? 'label-end' : ''
          } ${className}`}>
        {text}
        {children}
        {labelIcon && (
          <span
            className={`${radius ? 'rounded-' + radius : ''} label-btn-icon`}>
            {labelIcon}
          </span>
        )}
      </button>
    </span>
  );
};
