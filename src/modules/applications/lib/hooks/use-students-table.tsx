import React from 'react';
import {Avatar, Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

/**
 * @function
 * @name useStudentsTable
 * @description Columns for displaying students
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const useStudentsTable = () => {
    return [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image: any) => (
                <Avatar shape="square" size={64} src={image} />
            )
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: () => (
                <Button type={"primary"} danger icon={<DeleteOutlined />}>Remove</Button>
            )
        }
    ]
};

export default useStudentsTable;