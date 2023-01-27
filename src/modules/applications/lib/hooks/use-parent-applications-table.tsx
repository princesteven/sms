import React from 'react';
import {Button, Tag} from "antd";
import {Link} from "react-router-dom";
import {EyeOutlined} from "@ant-design/icons";

/**
 * @function
 * @name useParentApplicationsTable
 * @description Columns for parent applications table
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const useParentApplicationsTable = () => {
    const generateStatusColor = (status: 'paid' | 'pending-payment' | 'awaiting-results' | 'pass' | 'fail'): string => {
        if (status === 'paid')
            return 'success';

        if (status === 'pending-payment')
            return 'warning';

        if (status === 'awaiting-results')
            return 'geekblue';

        if (status === 'pass')
            return 'success';

        return 'magenta';
    }

    return [
        {
            title: 'School',
            dataIndex: 'school',
            key: 'school',
        },
        {
            title: 'Request No.',
            dataIndex: 'requestNo',
            key: 'requestNo',
        },
        {
            title: 'Student',
            dataIndex: 'student',
            key: 'student',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Interview Date',
            dataIndex: 'interviewDate',
            key: 'interviewDate',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: 'paid' | 'pending-payment' | 'awaiting-results' | 'pass' | 'fail') => (
                <Tag color={generateStatusColor(status)}>{status}</Tag>
            )
        },
        {
            title: 'Actions',
            dataIndex: 'status',
            key: 'actions',
            render: (status: 'paid' | 'pending-payment' | 'awaiting-results' | 'pass' | 'fail', record: any) => (
                <div className={"space-x-3 space-y-3"}>
                    <Link to={`view/${record.id}`}>
                        <Button icon={<EyeOutlined/>} type={"primary"}>View</Button>
                    </Link>
                </div>
            )
        }
    ]
};

export default useParentApplicationsTable;