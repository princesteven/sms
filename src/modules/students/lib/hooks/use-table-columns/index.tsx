import React from 'react';
import {Button} from "antd";
import {EditOutlined, EyeOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {SecondaryButton} from "../../../../common/components";

/**
 * @function
 * @name useTableColumns
 * @description Columns for students table
 * @version 0.0.1
 * @since 0.0.1
 * @returns {array} list of columns for students table
 */
const useTableColumns = () => {
    return [
        {
            title: 'Admission No',
            dataIndex: 'admissionNo',
            key: 'admissionNo'
        },
        {
            title: 'Reg No.',
            dataIndex: 'regNo',
            key: 'regNo'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender'
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (_text: string, record: any) => (
                <div className="space-x-3">
                    <Link to={`view/${record.id}`}>
                        <Button type={'primary'} icon={<EyeOutlined/>}>View</Button>
                    </Link>
                    <Link to={`update/${record.id}`}>
                        <SecondaryButton type={'primary'} icon={<EditOutlined/>}>Update</SecondaryButton>
                    </Link>
                </div>
            )
        }
    ]
};

export default useTableColumns;