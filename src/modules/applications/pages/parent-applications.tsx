import React from 'react';
import {Button, Table} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {useParentApplicationsTable} from "../lib/hooks";
import {parentsApplications} from "../db/parent-applications";
import {Link, Outlet} from "react-router-dom";

/**
 * @function
 * @name ParentApplications
 * @description Parents view of applications page
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const ParentApplications = () => {
    const columns = useParentApplicationsTable()

    return (
        <div className={"space-y-4"}>
            <div className="flex justify-end">
                <Link to={'create'}>
                    <Button type={"primary"} className={"bg-green-500 hover:bg-green-300"} icon={<PlusOutlined />}>
                        New Applications
                    </Button>
                </Link>
            </div>
            <Table
                dataSource={parentsApplications}
                columns={columns}
                rowKey={'id'}
            />
            <Outlet />
        </div>
    )
};

export default ParentApplications;