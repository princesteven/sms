import React from 'react';
import {Avatar, Button, Popover} from "antd";
import ProfilePopOver from "../ProfilePopover";
import {PROFILE_PICTURE, USER_NAME} from "../../db";
import NotificationPopover from "../NotificationPopover";
import {BellOutlined, MoreOutlined, SettingOutlined, CheckCircleTwoTone} from "@ant-design/icons";

/**
 * @function
 * @name NavActions
 * @description Navigation actions such as settings, notifications and profile
 * @version 1.0.0
 * @since 1.0.0
 * @author Prince Malipula
 */
const NavActions = () => {
    return (
        <div>
            <div className={'flex space-x-2'}>
                <Popover
                    placement="bottomRight"
                    trigger="click"
                    title={<div className={'flex justify-between min-w-full'}>
                        <span className="font-semibold">Notifications</span>
                        <CheckCircleTwoTone twoToneColor="#52c41a" className={'text-lg'} />
                    </div>}
                    className={'hidden xl:block'}
                    content={<NotificationPopover />}
                >
                    <Button className={'bg-gray-100 hidden xl:block'}>
                        <BellOutlined className={'text-base'}/>
                    </Button>
                </Popover>

                <Button className={'bg-gray-100 hidden xl:block'}>
                    <SettingOutlined className={'text-base'}/>
                </Button>

                <Popover
                    placement="bottomRight"
                    trigger="click"
                    className={'hidden xl:block'}
                    content={<ProfilePopOver/>}
                >
                    <Button className="font-semibold hover:bg-gray-100">
                        <div className={'grid grid-cols-5 place-content-center'}>
                            <div className={'col-span-1'}>
                                <Avatar src={PROFILE_PICTURE} shape={'circle'} size={'small'}/>
                            </div>
                            <div className={'col-span-4'}>{USER_NAME}</div>
                        </div>
                    </Button>
                </Popover>

                <Popover
                    placement="bottomRight"
                    trigger="click"
                    className={'block xl:hidden'}
                    content={<div className={'w-44'}>
                        <div
                            className={'flex space-x-4 py-3 px-3 border-b hover:bg-gray-100 hover:cursor-pointer'}>
                            <BellOutlined className={'text-base'}/>
                            <div>Notifications</div>
                        </div>
                        <div
                            className={'flex space-x-4 py-3 px-3 border-b hover:bg-gray-100 hover:cursor-pointer'}>
                            <SettingOutlined className={'text-base'}/>
                            <div>Settings</div>
                        </div>
                        <div
                            className={'grid grid-cols-5 place-content-center py-4 px-3  hover:bg-gray-100 hover:cursor-pointer'}>
                            <div className={'col-span-1'}>
                                <Avatar src={PROFILE_PICTURE} shape={'circle'} size={'small'}/>
                            </div>
                            <div className={'col-span-4'}>{USER_NAME}</div>
                        </div>
                    </div>}
                >
                    <Button className={'w-8 h-8 rounded-full grid place-content-center bg-gray-100'}>
                        <MoreOutlined />
                    </Button>
                </Popover>
            </div>
        </div>
    )
};

export default NavActions;
