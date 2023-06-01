import {fe} from "./index";
import {Menu} from "../types";
import {Link} from "react-router-dom";
import {DesktopOutlined, PieChartOutlined, UserOutlined} from "@ant-design/icons";

export const menus: Menu[] = [
    {
        label: <Link to={fe.dashboard}>Dashboard</Link>,
        key: fe.dashboard,
        icon: <DesktopOutlined/>,
    },
    {
        label: <Link to={fe.students}>Students</Link>,
        key: fe.students,
        icon: <PieChartOutlined/>,
    },
    {
        label: 'Applications',
        key: 'applications',
        icon: <UserOutlined/>,
        children: [
            {
                label: <Link to={fe.parent_applications}>Parent Application Page</Link>,
                key: fe.parent_applications,
            },
            {
                label: <Link to={fe.admin_applications}>Admin Application Page</Link>,
                key: fe.admin_applications,
            }
        ]
    },
]
