import React from "react";
import {Avatar, Col, Row} from "antd";
import {PROFILE_PICTURE} from "../../db";
import {UserOutlined, LogoutOutlined} from "@ant-design/icons";

/**
 * @function
 * @name ProfilePopover
 * @description A Popover component for displaying user profile detals
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns Profile Popover
 */
const ProfilePopOver = () => {
    return (
        <div className={'w-80'}>
            <Row gutter={12}>
                <Col span={4}>
                    <Avatar src={PROFILE_PICTURE} shape={'circle'} size={'large'}/>
                </Col>
                <Col span={20}>
                    <div className={'font-medium'}>Prince Malipula</div>
                    <div className={'font-light'}>Software Developer</div>
                </Col>
            </Row>

            <div className={'mt-4 px-3'}>
                <Row gutter={12} className={'hover:bg-gray-100 hover:cursor-pointer py-4'}>
                    <Col span={4}>
                        <UserOutlined />
                    </Col>
                    <Col span={20}>
                        View Profile
                    </Col>
                </Row>
                <Row gutter={12} className={'hover:bg-gray-100 hover:cursor-pointer py-4'}>
                    <Col span={4}>
                        <LogoutOutlined />
                    </Col>
                    <Col span={20}>
                        Logout
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ProfilePopOver;
