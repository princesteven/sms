import React from 'react';
import {useNavigate} from "react-router-dom";
import {fe} from "../../../../common/configs";
import {Button, Col, Form, Input, Row, Select} from "antd";

/**
 * @function
 * @name SchoolSignUp
 * @description School sign up page
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const SchoolSignUp = () => {
    const navigate = useNavigate()

    const handleSubmit = (_values: any) => {
        navigate(fe.dashboard)
    }

    const prefixSelector = (
        <Form.Item name="phoneCode" noStyle>
            <Select style={{width: 100}}>
                <Select.Option value="255">+255</Select.Option>
            </Select>
        </Form.Item>
    );

    return (
        <Form
            name="schoolSignupForm"
            layout={"vertical"}
            initialValues={{remember: true}}
            onFinish={handleSubmit}
            autoComplete="off"
        >
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item
                        label="School Name"
                        name="school"
                        rules={[{required: true, message: 'Please input your school name!'}]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Registration Number"
                        name="regNo"
                        rules={[{required: true, message: 'Please input your registration number!'}]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Email (will be used as default admin username)"
                        name="email"
                        rules={
                            [
                                {required: true, message: 'Please input your email!'},
                                {type: "email", message: "Please input valid email address!"}
                            ]
                        }
                    >
                        <Input/>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={
                            [
                                {required: true, message: 'Please input your phone number!'},
                                {pattern: /[0-9]{9}/, message: 'Please input valid phone number!'}
                            ]
                        }
                    >
                        <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Physical Address"
                        name="physicalAddress"
                        rules={[{required: true, message: 'Please select your physical address!'}]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Website"
                        name="website"
                    >
                        <Input/>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Default Admin Password"
                        name="password"
                        rules={[{required: true, message: 'Please input your admin default password!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Admin Confirm Password"
                        name="confirmPassword"
                        rules={[{required: true, message: 'Please input your admin default password!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Sign Up!
                </Button>
            </Form.Item>

        </Form>
    )
};

export default SchoolSignUp;
