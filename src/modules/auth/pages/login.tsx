import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Button, Checkbox, Form, Input} from 'antd';

/**
 * @function
 * @name Login
 * @description Login page
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = (_values: any) => {
        navigate('otp')
    };

    return (
        <div className={"bg-gray-100 h-screen grid place-content-center"}>
            <div className="bg-white shadow-sm border border-black rounded-lg px-20 py-10">
                <div className="text-center my-3">
                    <div className={"font-semibold leading-8"}>Welcome Back!</div>
                    <div className="font-light">Sign In to your account to continue</div>
                </div>
                <div className={"mt-5"}>
                    <Form
                        name="signInForm"
                        layout={"vertical"}
                        initialValues={{remember: true}}
                        onFinish={handleSubmit}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

                <div className={'space-y-2'}>
                    <Link to={'forgot-password'}>
                        <Button type={"link"} className={"font-bold"} block>Forgot Password</Button>
                    </Link>
                    <div className={"font-light"}>
                        Don't have an account yet?
                        <Link to={'sign-up'}>
                            <Button type={"link"}>Sign Up</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;