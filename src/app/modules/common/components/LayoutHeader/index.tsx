import React from 'react';
import NavActions from "../NavActions";
import {Button, Layout as AntdLayout, Space} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

interface LayoutHeaderProps {
    collapsed: boolean;
    onLayoutClose: () => void;
}

/**
 * @function
 * @name LayoutHeader
 * @description The header of the layout
 * @version 1.0.0
 * @since 1.0.0
 * @author Prince Malipula
 * @returns Page Layout Header
 */

const {Header} = AntdLayout;

const LayoutHeader: React.FC<LayoutHeaderProps> = ({ collapsed, onLayoutClose }) => {
    return (
        <Header className={'shadow-md sticky top-0 z-10 bg-white w-full'}>
            <Space className={'flex justify-between'}>
                <Button className="-ml-5 bg-gray-100" onClick={() => onLayoutClose()}>
                    {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </Button>

                <NavActions/>
            </Space>
        </Header>
    )
};

export default LayoutHeader;