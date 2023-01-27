import React from 'react';
import useAdminApplicationsTable from "../lib/hooks/use-admin-applications-table";
import {Button, Table} from "antd";
import {adminApplications} from "../db/admin-applications";
import {PlusOutlined} from "@ant-design/icons";
import {Link, Outlet} from "react-router-dom";

/**
 * @function
 * @name AdminApplications
 * @description Admins view of applications
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const AdminApplications = () => {
    const columns = useAdminApplicationsTable()

    return (
        <div className="space-y-4">
            <Outlet/>
            <div className="flex justify-end">
                <Link to={'create'}>
                    <Button type={'primary'} className={'bg-green-500'} icon={<PlusOutlined/>}>New Application</Button>
                </Link>
            </div>
            <Table
                dataSource={adminApplications}
                columns={columns}
                rowKey={'id'}
                loading={false}
            />
        </div>
    )
};

export default AdminApplications;