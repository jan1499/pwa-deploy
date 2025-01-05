import { Button } from "@/components/common/Button"
import { Modal, ModalBody, ModalHeader } from "@/components/common/Modal"
import { FormEvent, useCallback, useRef, useState } from "react"
import { emptyProject } from "@/interface/IProject"
import { Input } from "@/components/common/Input"
import { createProject, getAllBoards, getAllUsers } from "@/services/service"
import { Avatar, Select, Spin } from "@arco-design/web-react"
import { debounce } from "lodash"
import { IUser } from "@/interface/IUser"
import dp from '../../../../public/images/dp.svg'
import Image from "next/image"
import { IBoard } from "@/interface/IBoard"

export const CreateProjectModal = ({ isOpen, onCancel, afterSave }: { isOpen: boolean, onCancel: Function, afterSave?: Function }) => {
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
    const [formData, setFormData] = useState(emptyProject);
    const [options, setOptions] = useState<{ label: JSX.Element; value: any }[]>([]);
    const [boardOptions, setBoardOptions] = useState<{ label: JSX.Element; value: any }[]>([]);
    const [fetching, setFetching] = useState(false);
    const refFetchId = useRef<number | null>(null);

    const onFormChange = (name: string, value: any) => {
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const debouncedFetchUser = useCallback(
        debounce(async (inputValue) => {
            refFetchId.current = Date.now();
            const fetchId = refFetchId.current;
            setFetching(true);
            setOptions([]);

            const usersData = await getAllUsers(inputValue);
            if (refFetchId.current === fetchId && Array.isArray(usersData)) {
                const newOptions = usersData
                    .filter((user: IUser) => user.role !== "Admin")
                    .map((user: IUser) => ({
                        label: (
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Avatar size={24} style={{ marginLeft: 6, marginRight: 12 }}>
                                    <Image alt="avatar" src={dp} />
                                </Avatar>
                                {`${user.first_name} ${user.last_name}`}
                            </div>
                        ),
                        value: user.id,
                    }));
                setOptions(newOptions);
            }
            setFetching(false);
        }, 500),
        []
    );

    const debouncedFetchBoards = useCallback(
        debounce(async (inputValue) => {
            refFetchId.current = Date.now();
            const fetchId = refFetchId.current;
            setFetching(true);
            setBoardOptions([]);

            const boardsData = await getAllBoards(inputValue);
            if (refFetchId.current === fetchId && Array.isArray(boardsData)) {
                const newOptions = boardsData
                    .map((board: IBoard) => ({
                        label: (
                            <div style={{ display: "flex", alignItems: "center" }}>
                                {`${board.name}`}
                            </div>
                        ),
                        value: board.id,
                    }));
                setBoardOptions(newOptions);
            }
            setFetching(false);
        }, 500),
        []
    );

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsFormProcessing(true);

        try {
            const responseData = await createProject(formData);
            setIsFormProcessing(false);

            if (responseData?.code === 200) {
                setFormData(emptyProject);
                afterSave?.();
            }
        } catch (error) {
            setIsFormProcessing(false);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <ModalHeader title="Add Project" />
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
                    <label className="form-label">Project Members</label>
                    <Select
                        style={{ width: "100%" }}
                        mode="multiple"
                        showSearch
                        placeholder="Search members"
                        filterOption={false}
                        onSearch={debouncedFetchUser}
                        onChange={(values) => onFormChange("project_members", values)}
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
                <div className="col-12 col-md-12 mb-3 fw-normal fs-14 mb-4">
                    <label className="form-label">Boards</label>
                    <Select
                        style={{ width: "100%" }}
                        mode="multiple"
                        showSearch
                        placeholder="Search Boards"
                        filterOption={false}
                        onSearch={debouncedFetchBoards}
                        onChange={(values) => onFormChange("boards", values)}
                        options={boardOptions}
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