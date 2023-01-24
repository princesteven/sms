import {signInTypes} from "../db";
import React, {useState} from 'react';
import {Button, Radio, RadioChangeEvent} from 'antd';
import {ParentSignup, SchoolSignup} from "../components";
import {Link} from "react-router-dom";

/**
 * @function
 * @name SignUp
 * @description Sign up page
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const SignUp = () => {
    const [accountType, setAccountType] = useState('parent');

    const handleChangeType = ({target: {value}}: RadioChangeEvent) => {
        setAccountType(value)
    }

    return (
        <div className={"bg-gray-100 h-screen"}>
            <div className="grid place-content-center pt-10">
                <Radio.Group
                    options={signInTypes}
                    onChange={handleChangeType}
                    value={accountType}
                    optionType="button"
                    buttonStyle="solid"
                />
            </div>
            <div className="mt-4">
                <div className={"grid place-content-center"}>
                    <div className={"bg-white rounded-lg px-10 py-6 space-y-8"}>
                        {accountType === 'parent' && <ParentSignup/>}
                        {accountType === 'school' && <SchoolSignup/>}

                        <div className="grid place-content-center">
                            <Link to={'/'} className={"text-center"}>
                                <Button type={"link"} className={'font-semibold'}>Login</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignUp;