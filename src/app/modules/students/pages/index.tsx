import React from 'react';
import {Table} from "antd";
import {students} from "../db/students";
import {useTableColumns} from "../lib/hooks";
import {Link, Outlet} from "react-router-dom";
import {PlusOutlined} from "@ant-design/icons";
import SuccessButton from "../../common/components/SuccessButton";

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
                    <SuccessButton icon={<PlusOutlined/>}>Add student</SuccessButton>
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
