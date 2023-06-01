import React from 'react';
import {Button, ButtonProps} from "antd";

/**
 * @function
 * @name DangerOutlinedButton
 * @description Button for actions such as cancel
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const DangerOutlinedButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
            type={'ghost'}
            className={'border-slate-400 hover:text-red-600 hover:border-red-600'}
            {...props}
        >
            {props.children}
        </Button>
    )
};

export default DangerOutlinedButton;
