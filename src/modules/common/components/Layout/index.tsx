import menu from "../../db/menu";
import React, {useState} from 'react';
import {Breadcrumb, Layout as AntLayout, Menu, theme, Avatar, Row, Col} from 'antd';
import {Outlet} from "react-router-dom";

const {Header, Content, Footer, Sider} = AntLayout;

const Layout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <AntLayout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="mt-6">
                    <Row gutter={24}>
                        <Col span={collapsed ? 24 : 8}>
                            <div className="border-4 border-white round-full">
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        size={70}/>
                            </div>
                        </Col>
                        {!collapsed && <Col span={16}>
                            <div className="text-white">Prince Malipula</div>
                        </Col>}
                    </Row>
                </div>

                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menu}/>
            </Sider>
            <AntLayout className="site-layout">
                <Header style={{padding: 0, background: colorBgContainer}}/>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>
            </AntLayout>
        </AntLayout>
    )
};

export default Layout;