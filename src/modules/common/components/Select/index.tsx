import React from 'react';
import {SelectProps as AntSelectProps, Select as AntSelect, Empty, Spin} from "antd";

interface SelectProps extends AntSelectProps<any> {
    data: {
        id: string | number
        name: string
    }[],
}

/**
 * @function
 * @name Select
 * @description Custom select component
 * @param props
 * @version 0.0.1
 * @since 0.0.1
 * @returns Antd Select
 */
const Select: React.FC<SelectProps> = ({data, ...props}) => {
    return (
        <AntSelect
            {...props}
            showSearch
            filterOption={(input, option) =>
                (option?.label ?? '').toString().toLowerCase().includes(input.toLowerCase())
            }
            notFoundContent={props.loading
                ? <div className="grid place-content-center">
                    <Spin spinning={true}/>
                </div>
                : <Empty/>
            }
            options={data.map((datum) => {
                return {
                    value: datum.id,
                    label: datum.name
                }
            })}
        />
    )
};

export default Select;