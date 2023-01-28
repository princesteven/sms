import React from 'react';
import {Button, ButtonProps} from "antd";

/**
 * @function
 * @name SecondaryButton
 * @description Button for secondary events such as updating
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const SecondaryButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
            type={'primary'}
            className={'bg-amber-300'}
            {...props}
        >
            {props.children}
        </Button>
    )
};

export default SecondaryButton;