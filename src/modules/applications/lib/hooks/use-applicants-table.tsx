import React from 'react';
import {Button, Input, Tag} from "antd";
import {BellOutlined} from "@ant-design/icons";

/**
 * @function
 * @name useApplicantsTable
 * @description Columns for applicants table
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const useApplicantsTable = () => {
    const generateStatusColor = (status: 'paid' | 'pending-payment'): string => {
        if (status === 'paid')
            return 'success';

        if (status === 'pending-payment')
            return 'warning';

        return 'magenta';
    }

    return [
        {
            title: 'Student',
            dataIndex: 'name',
            key: 'name',
            fixed: true,
            width: 150,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: 100,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: 150,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 150,
            render: (status: 'paid' | 'pending-payment') => (
                <Tag color={generateStatusColor(status)}>{status}</Tag>
            ),
            filters: [
                {
                    text: 'Paid',
                    value: 'paid',
                },
                {
                    text: 'Pending Payment',
                    value: 'pending-payment',
                },
            ],
            onFilter: (value: any, record: any) => record.status.indexOf(value) === 0,
        },
        {
            title: 'Math',
            dataIndex: 'status',
            key: 'status',
            render: (status: 'paid' | 'pending-payment') => (
                <Input placeholder={"Math"} disabled={status !== 'paid'} />
            )
        },
        {
            title: 'Physics',
            dataIndex: 'status',
            key: 'status',
            render: (status: 'paid' | 'pending-payment') => (
                <Input placeholder={"Physics"} disabled={status !== 'paid'} />
            )
        },
        {
            title: 'Chemistry',
            dataIndex: 'status',
            key: 'status',
            render: (status: 'paid' | 'pending-payment') => (
                <Input placeholder={"Chemistry"} disabled={status !== 'paid'} />
            )
        },
        {
            title: 'Actions',
            dataIndex: 'status',
            key: 'actions',
            width: 150,
            render: (status: 'paid' | 'pending-payment', _record: any) => (
                <div className={"space-x-3 space-y-3"}>
                    {
                        status === 'pending-payment'
                            && <Button icon={<BellOutlined/>} type={"primary"}>Remind</Button>
                    }

                    {/*{status === 'view-results' &&*/}
                    {/*    <Button icon={<FileDoneOutlined/>}*/}
                    {/*            className={"bg-green-500 text-white hover:text-white"}>Results</Button>*/}
                    {/*}*/}

                    {/*{status !== 'awaiting-results' && status !== 'view-results' &&*/}
                    {/*    <Button icon={<DeleteOutlined/>} type={"primary"} danger>Drop Application</Button>*/}
                    {/*}*/}
                </div>
            )
        }
    ]
};

export default useApplicantsTable;