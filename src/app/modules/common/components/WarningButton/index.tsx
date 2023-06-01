import React from 'react';
import {Button, ButtonProps} from "antd";

/**
 * @function
 * @name WarningButton
 * @description Button for secondary events such as updating
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const WarningButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
            type={'ghost'}
            className={'bg-transparent border-amber-700 text-amber-700 hover:bg-amber-600 hover:text-white hover:border-amber-600'}
            {...props}
        >
            {props.children}
        </Button>
    )
};

export default WarningButton;
