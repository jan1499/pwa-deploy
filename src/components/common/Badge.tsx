import React, { ReactNode, HTMLAttributes, Ref } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  text?: string;
  color?: string;
  variant?: 'light' | 'gradient' | 'outline';
  radius?: string;
  innerRef?: Ref<HTMLSpanElement>;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  text,
  color = 'primary',
  variant,
  radius = '',
  className = '',
  innerRef,
  ...rest
}) => {
  const getBadgeVariantClass = (variant: string | undefined, color: string) => {
    switch (variant) {
      case 'light':
        return `bg-${color}-transparent`;
      case 'gradient':
        return `bg-${color}-gradient`;
      case 'outline':
        return `bg-outline-${color}`;
      default:
        return `bg-${color}`;
    }
  };

  return (
    <span {...rest} ref={innerRef} className={`badge ${getBadgeVariantClass(variant, color)} ${radius ? 'rounded-' + radius : ''} ${className}`}>
      {text}
      {children}
    </span>
  );
};
