import React, { ChangeEvent } from 'react';

interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'checkbox' | 'radio' | 'color' | 'textarea' | 'datalist';
  label?: string;
  isRequired?: boolean;
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
  rows?: number;
  options?: string[];
  size?: 'sm' | 'md' | 'lg';
  radius?: string;
  dataAttributes?: { key: string; value: string }[];
  autocomplete?:string
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  isRequired = false,
  id,
  name,
  value,
  defaultValue,
  onChange,
  checked = false,
  disabled = false,
  readOnly = false,
  placeholder,
  className = '',
  ariaLabel,
  rows,
  options = [],
  size = 'md',
  radius = '',
  dataAttributes = [],
  autocomplete
}) => {
  const isCheckboxOrRadio = type === 'checkbox' || type === 'radio';
  const isColorInput = type === 'color';

  const commonInputProps = {
    id,
    name,
    value,
    defaultValue,
    onChange,
    disabled,
    readOnly,
    className: `${isCheckboxOrRadio
      ? 'form-check-input'
      : isColorInput
        ? 'form-control form-input-color'
        : `form-control ${size ? 'form-control-' + size : ''}`
      } ${className} ${radius ? 'rounded-' + radius : ''}`,
    ...(isCheckboxOrRadio && checked === true ? { checked } : {})
  };

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            {...commonInputProps}
            aria-label={ariaLabel}
            rows={rows}
            placeholder={placeholder}
            {...Object.fromEntries(
              dataAttributes.map(data => (data.key ? [`data-${data.key}`, data.value] : []))
            )}
            autoComplete={autocomplete}
          />
        );

      case 'datalist':
        return (
          <>
            <input
              type="text"
              list={`${id}-list`}
              placeholder={placeholder}
              {...commonInputProps}
              {...Object.fromEntries(
                dataAttributes.map(data => (data.key ? [`data-${data.key}`, data.value] : []))
              )}
            />
            <datalist id={`${id}-list`}>
              {options &&
                options.map((option, index) => (
                  <option key={index} value={option} />
                ))}
            </datalist>
          </>
        );

      default:
        return (
          <input
            type={type}
            placeholder={placeholder}
            aria-label={ariaLabel}
            {...commonInputProps}
            {...Object.fromEntries(
              dataAttributes.map(data => (data.key ? [`data-${data.key}`, data.value] : []))
            )}
            autoComplete={autocomplete}
          />
        );
    }
  };

  return (
    <div>
      <Label htmlFor={id || ''} label={label} isRequired={isRequired} />
      {renderInput()}
    </div>
  );
};

interface LabelProps {
  htmlFor: string;
  label?: string;
  isRequired?: boolean;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({ htmlFor, label, isRequired, className }) => {
  return (
    <>
      {label && <label htmlFor={htmlFor} className={`form-label ${className || ''}`}>{label}</label>}
      {isRequired && <span className="text-danger ms-1">*</span>}
    </>
  );
};
