import React from 'react';
import {Button, Col, Form, Input, Row, Select} from "antd";
import {useNavigate} from "react-router-dom";
import {fe} from "../../../../common/configs";

/**
 * @function
 * @name ParentSignUp
 * @description Parent sign up page
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const ParentSignUp = () => {
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
            name="parentSignupForm"
            layout={"vertical"}
            initialValues={{remember: true}}
            onFinish={handleSubmit}
            autoComplete="off"
        >
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item
                        label="First Name"
                        name="fname"
                        rules={[{required: true, message: 'Please input your first name!'}]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Middle Name"
                        name="mname"
                    >
                        <Input/>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Last Name"
                        name="lname"
                        rules={[{required: true, message: 'Please input your last name!'}]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="gender"
                        label={"Gender"}
                        rules={[{required: true, message: 'Please select your gender!'}]}
                    >
                        <Select>
                            <Select.Option value="male">Male</Select.Option>
                            <Select.Option value="female">Female</Select.Option>
                        </Select>
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
                        label="Alternative Number"
                        name="alternativeNumber"
                        rules={
                            [
                                {required: true, message: 'Please input your alternative number!'},
                                {pattern: /[0-9]{9}/, message: 'Please input valid phone number!'}
                            ]
                        }
                    >
                        <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Email"
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
                        label="Physical Address"
                        name="physicalAddress"
                        rules={[{required: true, message: 'Please select your physical address!'}]}
                    >
                        <Input/>
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

export default ParentSignUp;
