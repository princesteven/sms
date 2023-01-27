import React from 'react';
import {classes} from "../db/classes";
import {useNavigate} from "react-router-dom";
import {academicYears} from "../db/academic-years";
import {Button, Col, DatePicker, Form, InputNumber, Modal, Row, Select} from "antd";

/**
 * @function
 * @name CreateApplicationAdmin
 * @description page to create school application
 * @version 0.0.1
 * @since 0.0.1
 */
const CreateApplicationAdmin = () => {
    const navigation = useNavigate()

    const handleCancel = () => {
        navigation('..')
    }

    const handleSubmit = () => {
        navigation('..')
    }

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };

    return (
        <Modal
            open={true}
            footer={[
                <Button onClick={handleCancel}>Cancel</Button>,
                <Button
                    type={"primary"}
                    htmlType={"submit"}
                    form={"createApplicationForm"}
                    onClick={handleSubmit}
                    className={"bg-green-500"}
                >
                    Submit
                </Button>,
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
                            label="Class"
                            name="class"
                            rules={[{required: true, message: 'Please input application class!'}]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a Class"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={classes.map((singleClass) => {
                                    return {
                                        value: singleClass.id,
                                        label: singleClass.name
                                    }
                                })}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Academic Year"
                            name="academicYear"
                            rules={[{required: true, message: 'Please input venue!'}]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a Academic Year"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={academicYears.map((academicYear) => {
                                    return {
                                        value: academicYear.id,
                                        label: academicYear.name
                                    }
                                })}
                            />
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
                            label="Interview Date"
                            name="date"
                            rules={[{required: true, message: 'Please input venue!'}]}
                        >
                            <DatePicker className={'w-full'}/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
};

export default CreateApplicationAdmin;