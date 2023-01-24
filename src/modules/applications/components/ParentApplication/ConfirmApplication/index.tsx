import {Button, Modal, Result, Table} from "antd";
import React, {Dispatch, SetStateAction, useState} from 'react';
import useStudentsTable from "../../../lib/hooks/use-students-table";
import {availableChildren} from "../../../db/available-children";
import {useNavigate} from "react-router-dom";

type ConfirmApplicationType = {
    isModalOpen: boolean
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}
/**
 * @function
 * @name ConfirmApplication
 * @description Confirm child application
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const ConfirmApplication: React.FC<ConfirmApplicationType> = ({isModalOpen, setIsModalOpen}) => {
    const navigate = useNavigate()
    const columns = useStudentsTable()
    const [loading, setLoading] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleOk = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setIsConfirmed(true)
        }, 1000)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleViewApplications = () => {
        navigate('../..')
    }

    return (
        <Modal
            title="Confirm Details"
            centered
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Close
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    className={"bg-green-500 text-white"}
                    loading={loading}
                    onClick={handleOk}
                    disabled={isConfirmed}
                >
                    Generate Invoice
                </Button>,
            ]}
        >
            {
                !isConfirmed && <div>
                    <p>School Name: <span className="font-semibold">Maria Goretti Secondary School</span></p>
                    <p>Application: <span className="font-semibold">Pre-Form One</span></p>
                    <p>Date: <span className="font-semibold">12th-January-2023</span></p>
                    <p>Time: <span className="font-semibold">12:00 PM</span></p>
                    <p>Venue: <span className="font-semibold">Dining Hall</span></p>

                    <p className="text-center font-semibold">Students Applying</p>

                    <Table
                        dataSource={availableChildren}
                        columns={columns}
                        rowKey={'id'}
                    />
                </div>
            }

            {
                isConfirmed && <Result
                    status="success"
                    title="Application Completed"
                    subTitle="You have successfully applied to Maria Goretti Secondary School. You will soon receive a control number for payment. Kindly pay before 20th-June-2023 to reserve a spot fot the interview."
                    extra={
                        <Button type="primary" key="view_applications" onClick={handleViewApplications}>
                            View Applications
                        </Button>
                    }
                />
            }
        </Modal>
    );
};

export default ConfirmApplication;