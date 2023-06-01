import React from 'react';
import {Button, ButtonProps} from "antd";

/**
 * @function
 * @name SuccessButton
 * @description Button for primary events such as adding and submitting
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const SuccessButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
            type={'ghost'}
            className={'bg-transparent border-green-700 text-green-700 hover:bg-teal-500 hover:text-white hover:border-teal-500'}
            {...props}
        >
            {props.children}
        </Button>
    )
};

export default SuccessButton;
