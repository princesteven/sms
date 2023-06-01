import './sider.css';
import Menu from "../Menu";
import React, {useEffect, useState} from 'react';
import {Drawer, Layout as AntdLayout} from "antd";
import {useWindowDimensions} from "../../lib/hooks";

interface SiderProps {
    collapsed: boolean;
    onClose: () => void;
}

/**
 * @function
 * @name Sider
 * @description Customer Sider component
 * @version 1.0.0
 * @since 1.0.0
 * @author Prince Malipula
 */

const {Sider: AntdSider} = AntdLayout;
const Sider: React.FC<SiderProps> = ({collapsed, onClose}) => {
    const {width} = useWindowDimensions();
    const [logo, setLogo] = useState();
    const [minimize, setMinimize] = useState(false);

    useEffect(() => {
        console.log('the width', width)
        if (width <= 1245) {
            console.log('the width', width)
            setMinimize(true)
            return
        }
        setMinimize(false)
    }, [width]);


    return (
        minimize ? <Drawer
                closable={false}
                placement="left"
                onClose={onClose}
                open={collapsed}
            >
                <AntdSider
                    width={268}
                    collapsed={false}
                    className={`overflow-auto h-screen fixed bg-blue-primary w-full`}
                    style={{flex: 1}}
                >
                    <div className="h-full flex flex-col justify-between absolute top-0 left-0 bottom-0 w-full">
                        <div>
                            <div className="flex items-center justify-center my-10 flex-col text-white font-bold text-lg">
                                <div
                                    className="w-40 h-20 bg-center bg-contain bg-no-repeat mb-4"
                                    style={{
                                        backgroundImage: `url(${logo})`
                                    }}
                                />
                                <span>EKO</span>
                            </div>
                            <Menu/>
                        </div>

                        <div className="text-white mb-1 text-center">
                            Version 0.0.1
                        </div>
                    </div>
                </AntdSider>
            </Drawer>
            : <AntdSider
                width={268}
                collapsed={collapsed}
                className={`overflow-auto h-screen fixed bg-blue-50 w-64`}
                style={{flex: 1}}
            >
                <div className="h-full flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-center my-10 flex-col text-white font-bold text-lg">
                            <div
                                className="w-40 h-20 bg-center bg-contain bg-no-repeat mb-4"
                                style={{
                                    backgroundImage: `url(${logo})`
                                }}
                            />
                            {
                                !collapsed && <span>EKO</span>
                            }
                        </div>
                        <Menu/>
                    </div>

                    <div className="text-white mb-1 text-center">
                        Version 0.0.1
                    </div>
                </div>
            </AntdSider>
    )
};

export default Sider;