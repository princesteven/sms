import React from 'react';
import {Button, Tag} from "antd";
import {EyeOutlined, DeleteOutlined, FileDoneOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

/**
 * @function
 * @name useParentApplicationsTable
 * @description Columns for parent applications table
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const useParentApplicationsTable = () => {
    const generateStatusColor = (status: 'paid' | 'pending-payment' | 'awaiting-results' | 'view-results'): string => {
        if (status === 'paid')
            return 'success';

        if (status === 'pending-payment')
            return 'warning';

        if (status === 'awaiting-results')
            return 'geekblue';

        if (status === 'view-results')
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
            title: 'Venue',
            dataIndex: 'venue',
            key: 'venue',
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
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: 'paid' | 'pending-payment' | 'awaiting-results' | 'view-results') => (
                <Tag color={generateStatusColor(status)}>{status}</Tag>
            )
        },
        {
            title: 'Actions',
            dataIndex: 'status',
            key: 'actions',
            render: (status: 'paid' | 'pending-payment' | 'awaiting-results' | 'view-results', record: any) => (
                <div className={"space-x-3 space-y-3"}>
                    <Link to={`view/${record.id}`}>
                        <Button icon={<EyeOutlined/>} type={"primary"}>View</Button>
                    </Link>

                    {status === 'view-results' &&
                        <Button icon={<FileDoneOutlined/>}
                                className={"bg-green-500 text-white hover:text-white"}>Results</Button>
                    }

                    {status !== 'awaiting-results' && status !== 'view-results' &&
                        <Button icon={<DeleteOutlined/>} type={"primary"} danger>Drop Application</Button>
                    }
                </div>
            )
        }
    ]
};

export default useParentApplicationsTable;