import React from 'react';
import {Link} from "react-router-dom";
import {Button, Form, Input} from "antd";

/**
 * @function
 * @name ForgotPassword
 * @description Forgot password page
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const ForgotPassword = () => {
    const handleSubmit = (values: any) => {
    }

    return (
        <div className={"bg-gray-100 h-screen grid place-content-center"}>
            <div className={"bg-white shadow-sm rounded-lg px-10 py-6 space-y-4"}>
                <div className="font-semibold">Forgot Password?</div>
                <div className="font-light">
                    Don't worry! Enter your email or username and we will contact you with instructions.
                </div>
                <Form
                    name="forgotPasswordForm"
                    layout={"vertical"}
                    initialValues={{remember: true}}
                    onFinish={handleSubmit}
                    autoComplete="off"
                >
                    <Form.Item
                        name="email"
                        rules={[{required: true, message: 'Please input your email or username!'}]}
                    >
                        <Input placeholder={"Enter Username/Email"}/>
                    </Form.Item>
                    <div className="flex justify-between">
                        <Link to={'/'}>
                            <Button type="link" className={"font-semibold"}>
                                Log In
                            </Button>
                        </Link>

                        <Button type="link" htmlType="submit" className={"font-semibold"}>
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
};

export default ForgotPassword;