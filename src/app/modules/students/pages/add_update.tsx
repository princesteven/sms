import React from 'react';
import {genders} from "../db/genders";
import {PhotoUpload} from "../components";
import {useNavigate} from "react-router-dom";
import Select from "../../common/components/Select";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";
import SuccessButton from "../../common/components/SuccessButton";
import {Modal, Form, Row, Col, InputNumber, DatePicker, Input} from "antd";
import DangerOutlinedButton from "../../common/components/DangerOutlinedButton";

interface AddUpdateStudentProps {
    id?: string
}

/**
 * @function
 * @name AddUpdateStudent
 * @description Add/Update component
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const AddUpdateStudent: React.FC<AddUpdateStudentProps> = ({ id }) => {
    const navigate = useNavigate()

    const handleSubmit = () => {
        console.log('the submit button')
    }

    const handleCancel = () => {
      navigate('..')
    }

    return (
        <Modal
            width={'60%'}
            onCancel={handleCancel}
            open={true}
            footer={[
                <SuccessButton onClick={handleCancel} icon={<CheckOutlined />}>Submit</SuccessButton>,
                <DangerOutlinedButton onClick={handleCancel} icon={<CloseOutlined />}>Cancel</DangerOutlinedButton>,
            ]}
            style={{top: 20}}
        >
            <Form
                name="createApplicationForm"
                layout={"vertical"}
                initialValues={{remember: true}}
                onFinish={handleSubmit}
                autoComplete="off"
            >
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            label="First Name"
                            name="firstName"
                            rules={[{required: true, message: 'Please input first name!'}]}
                        >
                            <Input placeholder={'First Name'} />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Middle Name"
                            name="middleName"
                        >
                            <Input placeholder={'Middle Name'} />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Surname"
                            name="surname"
                            rules={[{required: true, message: 'Please input surname!'}]}
                        >
                            <Input placeholder={'Surname'} />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Gender"
                            name="gender"
                            rules={[{required: true, message: 'Please input gender!'}]}
                        >
                            <Select data={genders} />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Capacity"
                            name="capacity"
                            rules={[{required: true, message: 'Please input venue!'}]}
                        >
                            <InputNumber placeholder={'Capacity'} className={'w-full'}/>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Date of Birth"
                            name="dob"
                            rules={[{required: true, message: 'Please input date of birth!'}]}
                        >
                            <DatePicker className={'w-full'}/>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="photo"
                            name="photo"
                            rules={[{required: true, message: 'Please input date of birth!'}]}
                        >
                            <PhotoUpload />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
};

export default AddUpdateStudent;
