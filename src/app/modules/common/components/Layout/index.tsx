import './layout.css'
import Sider from "../Sider";
import {Outlet} from "react-router-dom";
import React, { useState } from "react";
import LayoutHeader from "../LayoutHeader";
import { Layout as AntdLayout } from 'antd';

/**
 * @function
 * @name Layout
 * @description Layout of each page i.e top nav and side nav
 * @version 1.0.0
 * @since 1.0.0
 * @author Prince Malipula
 * @returns Page Layout
 */

const { Content} = AntdLayout;
export const Layout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <AntdLayout hasSider>
            <Sider collapsed={collapsed} onClose={() => setCollapsed(false)} />

            <AntdLayout>
                <LayoutHeader collapsed={collapsed} onLayoutClose={() => setCollapsed(!collapsed)} />

                <Content
                    className="mx-2 my-2 px-3 py-3 rounded-md bg-white"
                    style={{overflow: 'initial', minHeight: '92vh'}}
                >
                    <Outlet/>
                </Content>
            </AntdLayout>
        </AntdLayout>
    );
};

export default Layout;
