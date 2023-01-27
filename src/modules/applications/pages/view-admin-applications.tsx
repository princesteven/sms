import React from 'react';
import {Button, Modal, Table} from "antd";
import {useNavigate} from "react-router-dom";
import {useApplicantsTable} from "../lib/hooks";
import {DownloadOutlined} from "@ant-design/icons";
import {studentsApplied} from "../db/students-applied";
import {adminApplications} from "../db/admin-applications";
import useViewAdminApplicationsTable from "../lib/hooks/use-view-admin-applications-table";

/**
 * @function
 * @name ViewAdminApplications
 * @description View school applications at admin level
 * @version 0.0.1
 * @since 0.0.1
 */
const ViewAdminApplications = () => {
    const navigation = useNavigate()
    const applicantColumns = useApplicantsTable()
    const columns = useViewAdminApplicationsTable()

    const handleCancel = () => {
        navigation('..')
    }

    return (
        <Modal
            width={'60%'}
            onCancel={handleCancel}
            open={true}
            footer={null}
            style={{top: 20}}
        >
            <div className="mt-8">
                <Table
                    dataSource={[adminApplications[0]]}
                    columns={columns}
                    rowKey={'id'}
                    loading={false}
                    pagination={false}
                />
            </div>
            <div className="space-y-4">
                <div className="text-center mt-4 font-semibold text-lg">Applicants Details</div>
                <div className="flex justify-end space-x-3">
                    <Button icon={<DownloadOutlined />}>Download CSV</Button>
                    <Button type={'primary'}>Submit Results</Button>
                </div>
                <Table
                    dataSource={studentsApplied}
                    loading={false}
                    columns={applicantColumns}
                    rowKey={'id'}
                    scroll={{x: 2000}}
                />
            </div>
        </Modal>
    )
};

export default ViewAdminApplications;