import '../Layout/layout.css'
import {Menu as AntMenu} from "antd";
import {menus} from "../../configs/menu";
import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {fe} from "../../configs";

/**
 * @function
 * @name Layout
 * @description Layout of each page i.e top nav and side nav
 * @version 1.0.0
 * @since 1.0.0
 * @author Prince Malipula
 * @returns Page Layout
 */

const Menu = () => {
    const location = useLocation()
    const [activeKey, setActiveKey] = useState<string>('');

    useEffect(() => {
        const key = createActiveKey();

        setActiveKey(key)
    }, [location.pathname]);

    function createActiveKey() {
        const str = location.pathname;
        const index = str.indexOf('/');

        if (index === str.length - 1) {  // if there's nothing after the first '/'
            return '/';
        }

        return str.slice(index + 1);  // remove the '/' and return the rest of the string
    }

    return (
        <AntMenu theme="dark" className={''} mode="inline" selectedKeys={[activeKey]} items={menus}/>
    )
};

export default Menu;
