import { Button } from "@/components/common/Button"
import { Modal, ModalBody, ModalHeader } from "@/components/common/Modal"
import { FormEvent, useCallback, useRef, useState } from "react"
import { Input } from "@/components/common/Input"
import { createBoard, getAllLabels} from "@/services/service"
import { Avatar, Select, Spin } from "@arco-design/web-react"
import { debounce } from "lodash"
import dp from '../../../../public/images/dp.svg'
import Image from "next/image"
import { emptyBoard } from "@/interface/IBoard"
import { ILabel } from "@/interface/ILabel"

export const CreateBoardModal = ({ isOpen, onCancel, afterSave }: { isOpen: boolean, onCancel: Function, afterSave?: Function }) => {
    const onCancelClick = () => (onCancel());

    return (
        <Modal isOpen={isOpen} onBackdrop={onCancelClick} size={"md"}>
            <ModalBody>
                <div className='p-1'>
                    <Create afterSave={afterSave} onCancel={onCancelClick} />
                </div>
            </ModalBody>
        </Modal>
    )
}

export const Create = ({ afterSave, onCancel }: any) => {
    const [isFormProcessing, setIsFormProcessing] = useState(false);
    const [formData, setFormData] = useState(emptyBoard);
    const [options, setOptions] = useState<{ label: JSX.Element; value: any }[]>([]);
    const [fetching, setFetching] = useState(false);
    const refFetchId = useRef<number | null>(null);
console.log("formData",formData);

    const onFormChange = (name: string, value: any) => {
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const debouncedFetchLabels = useCallback(
        debounce(async (inputValue) => {
            refFetchId.current = Date.now();
            const fetchId = refFetchId.current;
            setFetching(true);
            setOptions([]);
    
            const labelsData = await getAllLabels(inputValue);
            if (refFetchId.current === fetchId && Array.isArray(labelsData)) {
                const newOptions = labelsData
                    .map((label: ILabel) => ({
                        label: (
                            <div style={{ display: "flex", alignItems: "center" }}>
                                {`${label.name}`}
                            </div>
                        ),
                        value: label.id,
                    }));
                setOptions(newOptions);
            }
            setFetching(false);
        }, 500),
        []
    );
    
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsFormProcessing(true);

        try {
            const responseData = await createBoard(formData);
            setIsFormProcessing(false);

            if (responseData?.code === 200) {
                setFormData(emptyBoard);
                afterSave?.();
            }
        } catch (error) {
            setIsFormProcessing(false);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <ModalHeader title="Add Board" />
            <div className="row mt-4">
                <div className="col-12 col-md-6 mb-3 fw-normal fs-14 mb-4">
                    <Input
                        isRequired
                        label="Name"
                        value={formData.name}
                        onChange={(e: any) => onFormChange("name", e.target.value)}
                        className="form-control"
                        id="name"
                        name="name"
                    />
                </div>
                <div className="col-12 col-md-6 mb-3 fw-normal fs-14 mb-4">
                    <Input
                        isRequired
                        label="Description"
                        value={formData.description}
                        onChange={(e: any) => onFormChange("description", e.target.value)}
                        className="form-control"
                        id="description"
                        name="description"
                    />
                </div>
                <div className="col-12 col-md-12 mb-3 fw-normal fs-14 mb-4">
                    <label className="form-label">Labels</label>
                    <Select
                        style={{ width: "100%" }}
                        mode="multiple"
                        showSearch
                        placeholder="Search and add Labels"
                        filterOption={false}
                        onSearch={debouncedFetchLabels}
                        onChange={(values) => onFormChange("labels", values)}
                        options={options}
                        notFoundContent={
                            fetching ? (
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Spin />
                                </div>
                            ) : null
                        }
                    />
                </div>
            </div>
            <div className="d-flex gap-2 justify-content-start mt-3">
                <Button text="Save" type="submit" isLoading={isFormProcessing} className="py-1" />
                <Button text="Cancel" color="light" onClick={onCancel} />
            </div>
        </form>
    )
}