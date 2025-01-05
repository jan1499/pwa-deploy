import React from 'react';
import { Modal, ModalHeader } from './Modal';
import { Button } from './Button';

interface ConfirmationPopupProps {
    isOpen: boolean;
    onYes: React.MouseEventHandler<HTMLButtonElement>;
    onCancel: React.MouseEventHandler<HTMLButtonElement>;
    msg?: string;
    yesButtonLabel?: string;
    noButtonLabel?: string;
    isFormProcessing?: boolean;
}

export const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
    isOpen,
    onYes,
    onCancel,
    msg = 'Do you want to delete it?',
    yesButtonLabel = 'Delete',
    noButtonLabel = 'Cancel',
    isFormProcessing = false
}) => {
    return (
        <Modal isOpen={isOpen} position="center">
            <div className='px-3 pt-3'>
                <ModalHeader title="Confirmation" />
            </div>
            <p className="px-3 mt-4 text-start">{msg}</p>
            <div className="d-flex justify-content-start mt-2 gap-2 px-3 pb-4">
                <Button text={yesButtonLabel} onClick={onYes} isLoading={isFormProcessing} />
                <Button text={noButtonLabel} color="light" onClick={onCancel} />
            </div>
        </Modal>
    );
};
