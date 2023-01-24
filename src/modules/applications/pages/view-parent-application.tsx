import React from 'react';
import {Button, Modal, Table} from "antd";
import {availableChildren} from "../db/available-children";
import useStudentsTable from "../lib/hooks/use-students-table";
import {useNavigate} from "react-router-dom";

/**
 * @function
 * @name ViewParentApplication
 * @description Page to view application of individual student made by the parent
 * @param props.id
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const ViewParentApplication = () => {
    const navigate = useNavigate()
    const columns = useStudentsTable()

    const handleCancel = () => {
      navigate('..')
    }

    return (
        <Modal
            open={true}
            onCancel={handleCancel}
            centered
            footer={[
                <Button type={"default"} onClick={handleCancel}>Close</Button>
            ]}
        >
            <p>School Name: <span className="font-semibold">Maria Goretti Secondary School</span></p>
            <p>Application: <span className="font-semibold">Pre-Form One</span></p>
            <p>Date: <span className="font-semibold">12th-January-2023</span></p>
            <p>Time: <span className="font-semibold">12:00 PM</span></p>
            <p>Venue: <span className="font-semibold">Dining Hall</span></p>

            <p className="text-center font-semibold">Student Details</p>

            <Table
                dataSource={[availableChildren[0]]}
                columns={columns}
                rowKey={'id'}
            />
        </Modal>
    )
};

export default ViewParentApplication;