import { useEffect, useState } from "react"
import { ConfirmationPopup } from "@/components/common/ConfirmationPopUp";
import { deleteProject } from "@/services/service";

export const DeleteProject = ({ deleteId, afterDelete, onCancel }: { deleteId: string, afterDelete: Function, onCancel: Function }) => {
    const [isFormProcessing, setIsFormProcessing] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (deleteId) {
            setIsOpen(true);
        }
    }, [deleteId])

    const handleOnDelete = async () => {
        setIsFormProcessing(true);
        const responseData = await deleteProject(deleteId);
        setIsFormProcessing(false);
        (await responseData)?.code === 200 && ( afterDelete(), setIsOpen(false));
    };

    return (
        <ConfirmationPopup isOpen={isOpen} onYes={handleOnDelete} onCancel={() => (setIsOpen(false), onCancel())} isFormProcessing={isFormProcessing} />
    )
}