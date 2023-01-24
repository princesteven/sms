import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Avatar, Button, Col, Drawer, Row} from "antd";
import {CheckOutlined} from "@ant-design/icons";
import {availableChildren} from "../db/available-children";
import ConfirmApplication from "../components/ParentApplication/ConfirmApplication";

/**
 * @function
 * @name ChildSelection
 * @description Select a child to attach to application
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const ChildSelection = () => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudents, setSelectedStudents] = useState<number[]>([]);

    const handleClose = () => {
        navigate('..')
    }

    const handleToggle = (studentId: number) => {
        const isSelected = selectedStudents.includes(studentId);

        if (!isSelected)
        {
            setSelectedStudents([...selectedStudents, studentId])
            return
        }

        const filteredStudents = selectedStudents.filter(student => student !== studentId)
        setSelectedStudents(filteredStudents);
    }

    return (
        <Drawer
            title="Select Child"
            width={'50%'}
            onClose={handleClose}
            open={true}
        >
            <Row gutter={24}>
                {availableChildren.map((child, index) => <Col span={12} className={'mt-3'} key={`child-${index}`}>
                    <Row
                        gutter={24}
                        className={'shadow-lg rounded-xl w-96 py-5 hover:cursor-pointer hover:border-2 hover:border-blue-700 hover:-translate-y-3'}
                        onClick={() => handleToggle(child.id)}
                    >
                        <Col span={6}><Avatar size={64} src={child.image}/></Col>
                        <Col span={18}>
                            <div className="flex justify-between">
                                <div>
                                    <div className="font-semibold text-xl">{child.name}</div>
                                    <div className="font-light text-lg">{child.age}</div>
                                </div>
                                {selectedStudents.includes(child.id) && <CheckOutlined className={'text-green-700 font-semibold'} />}
                            </div>
                        </Col>
                    </Row>
                </Col>)}
            </Row>

            <div className="flex justify-end mt-5">
                <Button type={"primary"} className={'bg-green-500'} onClick={() => setIsModalOpen(true)}>Confirm</Button>
            </div>

            <ConfirmApplication isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </Drawer>
    )
};

export default ChildSelection;