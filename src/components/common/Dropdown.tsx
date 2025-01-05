import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface DropdownProps {
  trigger: ReactNode;
  color?: string;
  className?: string;
  children: ReactNode | ((onClose: () => void) => ReactNode);
  onHover?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, color, className = '', children, onHover }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<{ top: string; left: string }>({
    top: 'auto',
    left: 'auto',
  });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLSpanElement>(null);

  //   const handleClickOutside = (event: MouseEvent) => {
  const handleClickOutside = (event: any) => {
    const { current: dropdownRefCurrent } = dropdownRef;
    const { current: buttonRefCurrent } = buttonRef;

    if (
      dropdownRefCurrent &&
      buttonRefCurrent &&
      !dropdownRefCurrent.contains(event.target as Node) &&
      !buttonRefCurrent.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }

    if (buttonRefCurrent && buttonRefCurrent.contains(event.target as Node)) {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }
  };

  const handleHover = () => {
    onHover && setIsOpen(true);
  };

  const handleMouseLeave = () => {
    onHover && setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const positionDropdown = () => {
    const dropdownList = dropdownRef.current?.querySelector('.dropdown-menu') as HTMLElement;
    const dropdownButton = buttonRef.current;

    if (dropdownList && dropdownButton) {
      const dropdownHeight = dropdownList.clientHeight;
      const dropdownWidth = dropdownList.clientWidth;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const dropdownRect = dropdownButton.getBoundingClientRect();
      const dropdownTop = dropdownRect.top;
      const dropdownLeft = dropdownRect.left;
      const dropdownRight = dropdownRect.right;

      // Vertical and Horizontal positioning
      if (windowHeight - dropdownTop < dropdownHeight && windowWidth - dropdownLeft < dropdownWidth) {
        dropdownList.style.bottom = '100%';
        dropdownList.style.top = 'auto';
        dropdownList.style.right = '0';
        dropdownList.style.left = 'auto';
        setDropdownPosition((prevPosition) => ({
          ...prevPosition,
          top: `${dropdownTop}px`,
          left: `${dropdownRight}px`,
        }));
      } else {
        // Vertical positioning
        if (windowHeight - dropdownTop < dropdownHeight) {
          dropdownList.style.bottom = '100%';
          dropdownList.style.top = 'auto';
          setDropdownPosition(() => ({ left: 'auto', top: `${dropdownTop}px` }));
        } else {
          dropdownList.style.bottom = 'auto';
          dropdownList.style.top = '100%';
        }
        // Horizontal positioning
        if (windowWidth - dropdownLeft < dropdownWidth) {
          dropdownList.style.right = '0';
          dropdownList.style.left = 'auto';
          setDropdownPosition(() => ({ top: 'auto', left: `${dropdownRight}px` }));
        } else {
          dropdownList.style.right = 'auto';
          dropdownList.style.left = '0';
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      positionDropdown();
    }
  }, [isOpen]);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <span className='position-relative' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
      <span ref={buttonRef}>{trigger}</span>
      {isOpen && (
        <div
          className={`dropdown position-absolute ${className}`}
          style={{ top: dropdownPosition.top, zIndex: 1090 }}
          ref={dropdownRef}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}>
          {onHover ? (
            <div>{typeof children === 'function' ? children(onClose) : children} </div>
          ) : (
            <ul className={`dropdown-menu show py-1 mt-1 ${color ? `dropmenu-item-${color}` : ''}`}>
              {typeof children === 'function' ? children(onClose) : children}
            </ul>
          )}
        </div>
      )}
    </span>
  );
};

interface DropdownItemProps {
  option: string;
  onClick: (option: string) => void;
  className?: string;
  children?: ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ option, onClick, className, children }) => {
  return (
    <li
      className={className}
      style={{ cursor: 'pointer' }}
      onClick={() => {
        onClick(option);
      }}>
      <a className="dropdown-item">{children ? children : option}</a>
    </li>
  );
};

export { Dropdown, DropdownItem };

