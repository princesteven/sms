import React from 'react';
import {Button} from "antd";
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
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Venue',
            dataIndex: 'venue',
            key: 'venue',
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