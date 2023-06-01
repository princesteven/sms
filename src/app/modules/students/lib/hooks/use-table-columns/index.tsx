import React from 'react';
import {Link} from "react-router-dom";
import {fe} from "../../../../common/configs";
import {EditOutlined, EyeOutlined} from "@ant-design/icons";
import WarningButton from "../../../../common/components/WarningButton";
import PrimaryButton from "../../../../common/components/PrimaryButton";

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
                <div className="flex md:space-x-8">
                    <Link to={`${fe.view}/${record.id}`}>
                        <PrimaryButton icon={<EyeOutlined/>}>View</PrimaryButton>
                    </Link>
                    <Link to={`${fe.update}/${record.id}`}>
                        <WarningButton icon={<EditOutlined/>}>Update</WarningButton>
                    </Link>
                </div>
            )
        }
    ]
};

export default useTableColumns;
