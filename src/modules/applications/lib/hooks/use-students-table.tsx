import React, {Dispatch, SetStateAction} from 'react';
import {Avatar, Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

interface Applicant {
    id: number;
    name: string;
    age: string;
    image: string;
}

/**
 * @function
 * @name useStudentsTable
 * @description Columns for displaying students
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const useStudentsTable = (applicants?: Applicant[], setApplicants?: Dispatch<SetStateAction<Applicant[]>>) => {

    const handleRemoveApplicants = (applicantId: number) => {
        if (applicants && setApplicants) {
            const remainingApplicants = applicants.filter((applicant) => applicant.id !== applicantId)
            setApplicants(remainingApplicants)
        }
    }

    let columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image: any) => (
                <Avatar shape="square" size={64} src={image}/>
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
        }
    ]

    if (applicants && setApplicants)
    {
        // @ts-ignore
        columns = [...columns, {
            title: 'Actions',
            dataIndex: 'name',
            key: 'name',
            // @ts-ignore
            render: (name: string, record: Applicant) => (
                <Button
                    type={"primary"}
                    danger
                    icon={<DeleteOutlined/>}
                    onClick={() => handleRemoveApplicants(record.id)}
                >
                    Remove
                </Button>
            )
        }]
    }

    return columns
};

export default useStudentsTable;