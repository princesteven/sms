import React from 'react';
import {Button, ButtonProps} from "antd";

/**
 * @function
 * @name PrimaryButton
 * @description Button for primary events such as adding and submitting
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const PrimaryButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
            type={'primary'}
            className={'bg-green-500'}
            {...props}
        >
            {props.children}
        </Button>
    )
};

export default PrimaryButton;