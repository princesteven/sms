import React from 'react';
import {Button, Form, Input} from "antd";
import {useNavigate} from "react-router-dom";

/**
 * @function
 * @name Otp
 * @description Forgot password page
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const Otp = () => {
    const navigate = useNavigate()

    const handleSubmit = (_values: any) => {
        navigate('/dashboard')
    }

    return (
        <div className={"bg-gray-100 h-screen grid place-content-center"}>
            <div className={"bg-white shadow-sm rounded-lg px-10 py-6 space-y-4"}>
                <div className="font-semibold">OTP</div>
                <div className="font-light">
                    We just sent you an OTP, enter the OTP to finish the login process
                </div>
                <Form
                    name="otpForm"
                    layout={"vertical"}
                    initialValues={{remember: true}}
                    onFinish={handleSubmit}
                    autoComplete="off"
                >
                    <Form.Item
                        name="otp"
                        rules={[{required: true, message: 'Please input your otp!'}]}
                    >
                        <Input placeholder={"Enter OTP"}/>
                    </Form.Item>
                    <div className="flex justify-between">
                        <Button type="link" htmlType="submit" className={"font-semibold"}>
                            Log In
                        </Button>

                        <Button type="link" className={"font-semibold"}>
                            Resend
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
};

export default Otp;