import React from 'react';
import {Button} from "antd";
import {Link} from "react-router-dom";
import {EyeOutlined, EditOutlined} from "@ant-design/icons";

/**
 * @function
 * @name useAdminApplicationsTable
 * @description Columns for admin applications table
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const useAdminApplicationsTable = () => {
    return [
        {
            title: 'Application Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Interview Date',
            dataIndex: 'interviewDate',
            key: 'interviewDate',
        },
        {
            title: 'Capacity',
            dataIndex: 'capacity',
            key: 'capacity',
        },
        {
            title: 'Confirmed',
            dataIndex: 'confirmedApplications',
            key: 'confirmedApplications',
        },
        {
            title: 'Unconfirmed',
            dataIndex: 'unconfirmedApplications',
            key: 'unconfirmedApplications',
        },
        {
            title: 'Slots Remaining',
            dataIndex: 'slotsRemaining',
            key: 'slotsRemaining',
        },
        {
            title: 'Actions',
            dataIndex: 'status',
            key: 'actions',
            render: (_status: any, record: any) => (
                <div className={"space-x-3 space-y-3"}>
                    <Link to={`view/${record.id}`}>
                        <Button icon={<EyeOutlined/>} type={"primary"}>View</Button>
                    </Link>

                    <Button icon={<EditOutlined/>} type={"primary"} className={'bg-amber-300'}>Update</Button>

                    {/*<Button icon={<DeleteOutlined/>} type={"primary"} danger>Delete</Button>*/}
                </div>
            )
        }
    ]
};

export default useAdminApplicationsTable;