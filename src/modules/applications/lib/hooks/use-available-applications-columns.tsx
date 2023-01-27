import React from 'react';
import {Button, Tag} from "antd";
import {Link} from "react-router-dom";

/**
 * @function
 * @name useAvailableApplicationsColumns
 * @description Columns for available applications table
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const useAvailableApplicationsColumns = () => {
    return [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Interview Date',
            dataIndex: 'interviewDate',
            key: 'interviewDate',
        },
        {
            title: 'Application Type',
            dataIndex: 'applicationType',
            key: 'applicationType',
            render: (type: 'transfer' | 'new entry') => (
                <Tag color={type === 'transfer' ? 'geekblue' : 'purple'}>{type}</Tag>
            )
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: () => (
                <Link to={'select-child'}>
                    <Button type={"primary"} className={"bg-green-500 text-white"}> Apply </Button>
                </Link>
            )
        }
    ]
};

export default useAvailableApplicationsColumns;