import React from 'react';
import {Button, ButtonProps} from "antd";

/**
 * @function
 * @name PrimaryButton
 * @description Button for other actions
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const PrimaryButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
            type={'ghost'}
            className={'bg-transparent border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white hover:border-sky-600'}
            {...props}
        >
            {props.children}
        </Button>
    )
};

export default PrimaryButton;
