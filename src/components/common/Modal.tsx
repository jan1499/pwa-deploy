import React, { useEffect, useRef, useState, ReactNode, MouseEventHandler } from 'react';

interface ModalProps {
  isOpen?: boolean;
  children?: ReactNode;
  onBackdrop?: () => void;
  size?: string | null;
  scrollable?: boolean;
  position?: 'default' | 'center' | 'top';
}

export const Modal: React.FC<ModalProps> = ({ isOpen = false, children, onBackdrop = null, size = null, scrollable = false, position = 'default' }) => {
  const [isShow, setIsShow] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && event.target === modalRef.current && event.target !== modalContentRef.current) {
        if (onBackdrop) {
          onBackdrop();
        }
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [onBackdrop]);

  useEffect(() => {
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';

    if (isOpen) {
      setIsShow(true);
      document.body.appendChild(backdrop);
    } else {
      setIsShow(false);
      const existingBackdrop = document.querySelector('.modal-backdrop');
      if (existingBackdrop) {
        document.body.removeChild(existingBackdrop);
      }
    }

    return () => {
      const existingBackdrop = document.querySelector('.modal-backdrop');
      if (existingBackdrop) {
        document.body.removeChild(existingBackdrop);
      }
    };
  }, [isOpen]);

  return (
    <div ref={modalRef} className={`modal fade effect-scale ${isShow ? 'show' : ''}`} style={{ display: isOpen === true ? 'block' : 'none' }} aria-modal="true" role="dialog">
      <div className={`modal-dialog ${position === 'center' ? 'modal-dialog-centered' : (position === 'top' ? 'modal-dialog-top' : '')} text-center ${scrollable ? 'modal-dialog-scrollable' : ''} ${size ? 'modal-' + size : ''}`} role="document">
        <div ref={modalContentRef} className="modal-content modal-content-demo" style={position === 'top' ? { borderRadius: '0px 0px 0.8rem 0.8rem' } : {}}>
          {children}
        </div>
      </div>
    </div>
  );
};

interface ModalHeaderProps {
  title: string;
  onClose?: MouseEventHandler<HTMLButtonElement>;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="modal-header">
      <h6 className="modal-title">{title}</h6>
      {onClose && <button aria-label="Close" className="btn-close" onClick={onClose}></button>}
    </div>
  );
};

interface ModalBodyProps {
  children: ReactNode;
}

export const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
  return (
    <div className="modal-body text-start">
      {children}
    </div>
  );
};

interface ModalFooterProps {
  children: ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
  return (
    <div className="modal-footer">
      {children}
    </div>
  );
};
