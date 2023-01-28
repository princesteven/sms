import React from 'react';
import {Table} from "antd";
import {students} from "../db/students";
import {useTableColumns} from "../lib/hooks";
import {Link, Outlet} from "react-router-dom";
import {PrimaryButton} from "../../common/components";
import {PlusOutlined} from "@ant-design/icons";

/**
 * @function
 * @name Students
 * @description Students page
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const Students = () => {
    const columns = useTableColumns();
    return (
        <div className={'space-y-4'}>
            <div className="flex justify-end">
                <Link to={'create'}>
                    <PrimaryButton icon={<PlusOutlined/>}>Add student</PrimaryButton>
                </Link>
            </div>
            <Table
                dataSource={students}
                columns={columns}
            />
            <Outlet/>
        </div>
    )
};

export default Students;